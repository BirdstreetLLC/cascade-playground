import { Component, Input } from '@angular/core';
import { cascadeFigmaVariables } from '../../cascade';
@Component({
  selector: 'app-summary-card',
  imports: [],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css'
})
export class SummaryCardComponent {
  @Input() label: string = '';
  @Input() data: number = 0;
  @Input() link: string = '';
  @Input() onClick: () => void = () => {};
  cascade = cascadeFigmaVariables
}
