import { Component } from '@angular/core';
import { AcaiCalculatorComponent } from './acai-calculator/acai-calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [AcaiCalculatorComponent] // Adicione AcaiCalculatorComponent
})
export class AppComponent {
  title = 'rentabilidadeAcai';
}
