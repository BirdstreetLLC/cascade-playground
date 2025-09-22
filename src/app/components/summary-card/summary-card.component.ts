import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cascadeFigmaVariables } from '../../cascade';
import { NgIf } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

export enum DataType {
  Number = 'Number',
  Percentage = 'Percentage',
  Negative = 'Negative',
  Positive = 'Positive',
}
@Component({
  selector: 'app-summary-card',
  imports: [NgIf, TooltipModule],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css',
})
export class SummaryCardComponent {
  @Input() label: string = '';
  @Input() data: number = 0;
  @Input() link: string = '';
  @Input() dataType: DataType = DataType.Number;
  @Input() onClick: any = () => {};
  @Input() tooltip: string = '';

  cascade = cascadeFigmaVariables;
  dataTypeEnum = DataType;

  get textColor(): string {
    switch (this.dataType) {
      case DataType.Number:
        return this.cascade.cascadeBrand.greyDarkest;
      case DataType.Percentage:
        if (this.data > 50) {
          return this.cascade.cascadeAlias.tertiary;
        } else {
          return this.cascade.cascadeBrand.greyDarkest;
        }
      case DataType.Negative:
        return this.cascade.cascadeAlias.error;
      case DataType.Positive:
        return this.cascade.cascadeAlias.tertiary;
      default:
        return this.cascade.cascadeBrand.greyDarkest;
    }
  }
}
