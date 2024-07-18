import { Component } from '@angular/core';
import { AcaiCalculatorComponent } from './acai-calculator/acai-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AcaiCalculatorComponent]
})
export class AppComponent {
  title = 'acai-calculator';
}
