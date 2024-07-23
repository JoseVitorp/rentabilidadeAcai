import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AcaiService } from '../services/acai.service';
import { ToppingService } from '../services/topping.service';

@Component({
  selector: 'app-acai-calculator',
  templateUrl: './acai-calculator.component.html',
  styleUrls: ['./acai-calculator.component.css'],
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  providers: [AcaiService, ToppingService]
})
export class AcaiCalculatorComponent implements OnInit {
  categories = ['Frutas', 'Chocolates', 'Diversos', 'Cremes', 'Adicionais Diet'];
  toppings: any[] = [];
  selectedToppings: any[] = [];
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

  onToppingChange(event: any, category: string) {
    const selectedTopping = this.toppings.find(topping => topping.name === event.target.value && topping.category === category);
    if (selectedTopping && !this.selectedToppings.includes(selectedTopping)) {
      this.selectedToppings.push(selectedTopping);
    }
  }

  calculate(event: Event) {
    event.preventDefault();
    this.totalPulpReduction = this.selectedToppings.reduce((acc, topping) => acc + topping.pulpReduction, 0);
    this.totalCost = this.selectedToppings.reduce((acc, topping) => acc + topping.additionalCost, 0);
    this.totalSellingPrice = this.selectedToppings.reduce((acc, topping) => acc + topping.sellingPrice, 0);
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
    this.totalPulpReduction = 0;
    this.totalCost = 0;
    this.profitability = null;
  }
}
