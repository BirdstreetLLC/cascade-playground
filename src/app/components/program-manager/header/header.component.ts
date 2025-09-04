import { Component, Input, booleanAttribute } from '@angular/core';
import { NgIf } from '@angular/common';
import { cascadeFigmaVariables } from '../../../cascade';
import { Button } from 'primeng/button';
import { BasicLabelComponent } from '../../basic-label/basic-label.component';
import { PillComponent, PillStyles } from '../../pill/pill.component';
import { MatIcon } from '@angular/material/icon';
import { SummaryCardComponent } from '../../summary-card/summary-card.component';
import { DataType } from '../../summary-card/summary-card.component';

@Component({
  selector: 'app-header',
  imports: [
    NgIf,
    Button,
    BasicLabelComponent,
    PillComponent,
    MatIcon,
    SummaryCardComponent,
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() channel: string = '';
  @Input() dataAsOf: string = '';
  @Input() startDate: string = '';
  @Input() endDate: string = '';
  @Input() programManagerUrl: string = '';
  @Input() dpiDataOverviewUrl: string = '';
  @Input() viewMembersUrl: string = '';
  @Input() trackedOutcome: string = '';
  @Input() definitions: boolean = false;
  @Input() engagementRate: number = 0;
  @Input() memberList: number = 0;
  @Input() engaged: number = 0;
  @Input() unableToReach: number = 0;
  @Input() optedOut: number = 0;
  @Input() didNotEngage: number = 0;
  @Input() fullWidth: boolean = false;

  booleanAttribute = this.definitions;
  cascade = cascadeFigmaVariables;
  pillStyleEnum = PillStyles;
  dataTypeEnum = DataType;
}
