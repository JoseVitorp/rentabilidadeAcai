// src/app/models/topping.ts
export interface Topping {
  name: string;
  category: 'Frutas' | 'Chocolates' | 'Diversos' | 'Cremes' | 'Adicionais Diet';
  pulpReduction: number; // Quantidade de polpa reduzida
  additionalCost: number; // Custo adicional
  sellingPrice: number; // Valor de venda
}
