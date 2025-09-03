import { Component, Input } from '@angular/core';
import { cascadeFigmaVariables } from '../../cascade';

export enum PillStyles {
    Primary = 'Primary',
    Tertiary = 'Tertiary',
    Standard = 'Standard',
}
@Component({
  selector: 'app-pill',
  imports: [],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.css',
})

export class PillComponent {
  @Input() label: string = '';
  @Input() pillStyle: PillStyles = PillStyles.Primary;
  cascade = cascadeFigmaVariables;
  pillStyleEnum = PillStyles;
  get backgroundColor(): string {
  switch (this.pillStyle) {
    case PillStyles.Primary:
      return this.cascade.cascadeAlias.primary;
    case PillStyles.Tertiary:
      return this.cascade.cascadeAlias.tertiary;
    case PillStyles.Standard:
      return this.cascade.cascadeAlias.neutral;
    default:
      return this.cascade.cascadeAlias.tertiary; // or some default color
  }
}
}
