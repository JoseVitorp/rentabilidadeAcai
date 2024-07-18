// src/app/acai-calculator/acai-calculator.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Topping } from '../models/topping';
import { ToppingService } from '../services/topping.service';
import { AcaiService } from '../services/acai.service';
import { AcaiSize } from '../models/acai-size';

@Component({
  selector: 'app-acai-calculator',
  standalone: true,
  templateUrl: './acai-calculator.component.html',
  styleUrls: ['./acai-calculator.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AcaiCalculatorComponent {
  categories = ['Frutas', 'Chocolates', 'Diversos', 'Cremes', 'Adicionais Diet'];
  selectedToppings: Topping[] = [];
  selectedSize: AcaiSize | null = null;
  totalPulpReduction: number = 0;
  totalCost: number | null = null;
  profitability: number | null = null;

  constructor(private toppingService: ToppingService, private acaiService: AcaiService) {}

  getToppingsByCategory(category: string): Topping[] {
    return this.toppingService.getToppings().filter(t => t.category === category);
  }

  getAcaiSizes(): AcaiSize[] {
    return this.acaiService.getAcaiSizes();
  }

  onToppingChange(event: Event, category: string): void {
    const select = event.target as HTMLSelectElement;
    const toppingName = select.value;
    const topping = this.getToppingsByCategory(category).find(t => t.name === toppingName);

    if (topping) {
      this.selectedToppings.push(topping);
    }

    // Reset the select element
    select.value = '';
  }

  onSizeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const selectedSize = this.acaiService.getAcaiSizes().find(size => size.size === +select.value);
    this.selectedSize = selectedSize || null;
  }

  calculate(): void {
    if (!this.selectedSize) return;

    this.totalPulpReduction = this.selectedToppings.reduce((sum, t) => sum + t.pulpReduction, 0);
    const totalAdditionalCost = this.selectedToppings.reduce((sum, t) => sum + t.additionalCost, 0);
    const acaiCost = (this.selectedSize.size - this.totalPulpReduction) * this.selectedSize.costPerMl;
    const totalSellingPrice = this.selectedSize.sellingPrice + this.selectedToppings.reduce((sum, t) => sum + t.sellingPrice, 0);
    this.totalCost = acaiCost + totalAdditionalCost;
    this.profitability = totalSellingPrice - this.totalCost;
  }
}
