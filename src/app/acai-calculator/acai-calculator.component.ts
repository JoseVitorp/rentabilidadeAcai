import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AcaiService } from '../services/acai.service';
import { ToppingService } from '../services/topping.service';
import { CurrencyBrlPipe } from '../pipes/currency-brl.pipe';

@Component({
  selector: 'app-acai-calculator',
  templateUrl: './acai-calculator.component.html',
  styleUrls: ['./acai-calculator.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyBrlPipe],
  providers: [AcaiService, ToppingService]
})
export class AcaiCalculatorComponent implements OnInit {
  categories = ['Frutas', 'Chocolates', 'Diversos', 'Cremes', 'Adicionais Diet'];
  toppings: any[] = [];
  selectedToppings: any[] = [];
  selectedQuantities: { [key: string]: number } = {};
  totalPulpReduction: number = 0;
  totalCost: number = 0;
  totalSellingPrice: number = 0;
  profitability: number | null = null;
  acaiSizes: any[] = [];
  selectedSize: any = null;

  constructor(private acaiService: AcaiService, private toppingService: ToppingService) {}

  ngOnInit() {
    this.toppings = this.toppingService.getToppings();
    this.acaiSizes = this.acaiService.getAcaiSizes();
  }

  getToppingsByCategory(category: string) {
    return this.toppings.filter(topping => topping.category === category);
  }

  onSizeChange(event: any) {
    this.selectedSize = this.acaiSizes.find(size => size.size == event.target.value);
  }

  addTopping(topping: any) {
    const quantity = this.selectedQuantities[topping.name] || 1;
    const toppingWithQuantity = { ...topping, quantity };
    const existingTopping = this.selectedToppings.find(t => t.name === topping.name);
    if (existingTopping) {
      existingTopping.quantity += quantity;
    } else {
      this.selectedToppings.push(toppingWithQuantity);
    }
    this.selectedQuantities[topping.name] = 1; // Reset quantity input
  }

  calculate(event: Event) {
    event.preventDefault();
    this.totalPulpReduction = this.selectedToppings.reduce((acc, topping) => acc + (topping.pulpReduction * topping.quantity), 0);
    this.totalCost = this.selectedToppings.reduce((acc, topping) => acc + (topping.additionalCost * topping.quantity), 0);
    this.totalSellingPrice = this.selectedToppings.reduce((acc, topping) => acc + (topping.sellingPrice * topping.quantity), 0);
    if (this.selectedSize) {
      const baseCost = this.selectedSize.size * 0.0145; // Custo base do açaí por ml
      const adjustedCost = this.totalPulpReduction * 0.0145; // Custo ajustado pela polpa retirada
      this.totalCost += baseCost - adjustedCost;
      const baseSellingPrice = this.selectedSize.sellingPrice;
      this.totalSellingPrice += baseSellingPrice;
      this.profitability = this.totalSellingPrice - this.totalCost;
    }
  }

  clearSelections() {
    this.selectedToppings = [];
    this.selectedQuantities = {};
    this.totalPulpReduction = 0;
    this.totalCost = 0;
    this.totalSellingPrice = 0;
    this.profitability = null;
  }
}
