import { Component, Input } from '@angular/core';
import { cascadeFigmaVariables } from '../../cascade';
@Component({
  selector: 'app-pill',
  imports: [],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.css',
})
export class PillComponent {
  @Input() label: string = '';
  cascade = cascadeFigmaVariables;
}
