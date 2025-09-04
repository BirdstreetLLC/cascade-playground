import { Component, Input } from '@angular/core';
import { cascadeFigmaVariables } from '../../cascade';
import { NgIf } from '@angular/common';

export enum DataType {
  Number = 'Number',
  Percentage = 'Percentage',
  Negative = 'Negative'
}
@Component({
  selector: 'app-summary-card',
  imports: [NgIf],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css'
})
export class SummaryCardComponent {
  @Input() label: string = '';
  @Input() data: number = 0;
  @Input() link: string = '';
  @Input() onClick: () => void = () => {};
  @Input() dataType: DataType = DataType.Number;
  cascade = cascadeFigmaVariables
  dataTypeEnum = DataType

  get textColor(): string {
      switch (this.dataType) {
        case DataType.Number:
          return this.cascade.cascadeBrand.greyDarkest;
        case DataType.Percentage:
          if ( this.data > 50) {
            return this.cascade.cascadeAlias.tertiary;
          }
          else {
            return this.cascade.cascadeBrand.greyDarkest;
          }
          case DataType.Negative:
            return this.cascade.cascadeAlias.error;
        default:
          return this.cascade.cascadeBrand.greyDarkest;
      }
    }
}
