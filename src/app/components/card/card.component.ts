import { Component, Input, input } from '@angular/core';
import { PillComponent } from '../pill/pill.component';
import { Button } from 'primeng/button';
import { MatIcon } from '@angular/material/icon';
import { cascadeFigmaVariables } from '../../cascade';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [PillComponent, Button, MatIcon, DecimalPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() status: string = '';
  @Input() title: string = '';
  @Input() startDate: string = '';
  @Input() endDate: string = '';
  @Input() engagementRate: number = 0;
  @Input() engagementRateTitle: string = '';
  @Input() engagementRateSubtitle: string = '';
  @Input() memberList: number = 0;
  @Input() engaged: number = 0;
  @Input() unableToReach: number = 0;
  @Input() optedOut: number = 0;

  cascade = cascadeFigmaVariables
}
