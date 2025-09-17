import { Component, Input } from '@angular/core';
import { PillComponent, PillStyles } from '../pill/pill.component';
import { Button } from 'primeng/button';
import { MatIcon } from '@angular/material/icon';
import { cascadeFigmaVariables } from '../../cascade';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Status } from '../../services/programData';
import { ProgramTieredMenuComponent } from '../program-manager/program-tiered-menu/program-tiered-menu.component';
import { TooltipModule } from 'primeng/tooltip';
import {tooltipDefinitions, TooltipDefinitions} from '../../services/tooltipDefinitions';
import { getDefinition } from '../../utils/getDefinition';

@Component({
  selector: 'app-card',
  imports: [
    PillComponent,
    Button,
    MatIcon,
    DecimalPipe,
    RouterLink,
    NgIf,
    ProgramTieredMenuComponent,
    TooltipModule
  ],
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

  cascade = cascadeFigmaVariables;
  pillStyleEnum = PillStyles;
  statusEnum = Status;
  tooltipDefinitions = tooltipDefinitions
  tooltipEnum = TooltipDefinitions
  getDefinition = getDefinition

}
