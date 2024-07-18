import { Injectable } from '@angular/core';
import { Topping } from '../models/topping';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {
  private toppings: Topping[] = [
    // Frutas
    { name: 'Banana', category: 'Frutas', pulpReduction: 0, additionalCost: 0.76, sellingPrice: 2.5 },
    { name: 'Morango', category: 'Frutas', pulpReduction: 0, additionalCost: 2.62, sellingPrice: 4.0 },
    { name: 'Uva', category: 'Frutas', pulpReduction: 0, additionalCost: 0.95, sellingPrice: 3.0 },
    { name: 'Cereja', category: 'Frutas', pulpReduction: 0, additionalCost: 1.76, sellingPrice: 4.0 },
    // Chocolates
    { name: 'Bis Preto', category: 'Chocolates', pulpReduction: 0, additionalCost: 0.59, sellingPrice: 2.0 },
    { name: 'Bis Branco', category: 'Chocolates', pulpReduction: 0, additionalCost: 0.58, sellingPrice: 2.0 },
    { name: 'Confeti', category: 'Chocolates', pulpReduction: 0, additionalCost: 1.03, sellingPrice: 2.5 },
    { name: 'KitKat', category: 'Chocolates', pulpReduction: 0, additionalCost: 1.04, sellingPrice: 3.0 },
    { name: 'Ferrero Rocher', category: 'Chocolates', pulpReduction: 0, additionalCost: 1.9, sellingPrice: 4.5 },
    { name: 'OvoMaltine', category: 'Chocolates', pulpReduction: 118.58, additionalCost: 2.07, sellingPrice: 2.5 },
    { name: 'Rocks ovomaltine', category: 'Chocolates', pulpReduction: 0, additionalCost: 2.09, sellingPrice: 4.0 },
    { name: 'Gotas de chocolate', category: 'Chocolates', pulpReduction: 0, additionalCost: 0.56, sellingPrice: 2.5 },
    { name: 'Soho de valsa', category: 'Chocolates', pulpReduction: 0, additionalCost: 0.94, sellingPrice: 2.0 },
    { name: 'Ouro branco', category: 'Chocolates', pulpReduction: 0, additionalCost: 1.07, sellingPrice: 2.0 },
    // Cremes
    { name: 'Avelã Di Matteo', category: 'Cremes', pulpReduction: 38.82, additionalCost: 1.82, sellingPrice: 4.5 },
    { name: 'Nutella', category: 'Cremes', pulpReduction: 38.28, additionalCost: 3.72, sellingPrice: 7.0 },
    { name: 'Ninho gourmet', category: 'Cremes', pulpReduction: 95.89, additionalCost: 0.98, sellingPrice: 5.0 },
    { name: 'Pistache', category: 'Cremes', pulpReduction: 40.92, additionalCost: 3.06, sellingPrice: 6.0 },
    { name: 'Creme sonho de valsa', category: 'Cremes', pulpReduction: 40.65, additionalCost: 2.29, sellingPrice: 4.5 },
    { name: 'Nutella branca', category: 'Cremes', pulpReduction: 42.23, additionalCost: 2.78, sellingPrice: 5.0 },
    { name: 'Ninho com choc. Branco', category: 'Cremes', pulpReduction: 42.66, additionalCost: 2.57, sellingPrice: 4.5 },
    { name: 'Ovomaltine gourmet', category: 'Cremes', pulpReduction: 42.02, additionalCost: 2.55, sellingPrice: 6.0 },
    { name: 'Creme Laka', category: 'Cremes', pulpReduction: 43.33, additionalCost: 2.4, sellingPrice: 5.0 },
    { name: 'Iogurte Grecco', category: 'Cremes', pulpReduction: 0, additionalCost: 1.07, sellingPrice: 5.0 },
    // Adicionais Diet
    { name: 'Creme de amendoim integral', category: 'Adicionais Diet', pulpReduction: 44.25, additionalCost: 1.69, sellingPrice: 3.0 },
    { name: 'Paçoca diet', category: 'Adicionais Diet', pulpReduction: 55.56, additionalCost: 3.09, sellingPrice: 3.5 },
    { name: 'Nutella diet', category: 'Adicionais Diet', pulpReduction: 42.74, additionalCost: 4.67, sellingPrice: 6.0 },
    // Diversos
    { name: 'Sucrilhos', category: 'Diversos', pulpReduction: 214.29, additionalCost: 1.18, sellingPrice: 2.0 },
    { name: 'Leite condensado', category: 'Diversos', pulpReduction: 54.35, additionalCost: 0.88, sellingPrice: 2.5 },
    { name: 'Leite cond. Moça', category: 'Diversos', pulpReduction: 0, additionalCost: 1.25, sellingPrice: 3.5 },
    { name: 'Leite em pó', category: 'Diversos', pulpReduction: 102.39, additionalCost: 1.22, sellingPrice: 2.0 },
    { name: 'Leite em pó Ninho', category: 'Diversos', pulpReduction: 0, additionalCost: 1.34, sellingPrice: 3.0 },
    { name: 'Paçoca', category: 'Diversos', pulpReduction: 55.56, additionalCost: 0.94, sellingPrice: 2.0 },
    { name: 'Mel', category: 'Diversos', pulpReduction: 0, additionalCost: 0.35, sellingPrice: 1.5 },
    { name: 'Granola tradicional', category: 'Diversos', pulpReduction: 129.31, additionalCost: 0.93, sellingPrice: 2.0 },
    { name: 'Cocco Ralado', category: 'Diversos', pulpReduction: 180.41, additionalCost: 1.75, sellingPrice: 2.0 }
  ];

  getToppings(): Topping[] {
    return this.toppings;
  }
}
