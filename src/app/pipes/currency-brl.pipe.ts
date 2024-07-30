import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBrl',
  standalone:true
})
export class CurrencyBrlPipe implements PipeTransform {

  transform(value: number): string {
    if (value !== null && value !== undefined) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      }).format(value);
    }
    return '';
  }
}
