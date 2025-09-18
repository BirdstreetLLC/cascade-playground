import { Component, OnInit } from '@angular/core';
import { GlobalHeaderComponent } from '../../components/global-header/global-header.component';
import { HeaderComponent } from '../../components/program-manager/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import { programData } from '../../services/programData';
import { CalendarModule } from 'primeng/calendar';
import { PopoverModule } from 'primeng/popover';
import { Listbox } from 'primeng/listbox';
import { MatIcon } from '@angular/material/icon';
import { cascadeFigmaVariables } from '../../cascade';

@Component({
  selector: 'app-program-manager',
  imports: [
    GlobalHeaderComponent,
    HeaderComponent,
    CardComponent,
    NgFor,
    CalendarModule,
    PopoverModule,
    Listbox,
    MatIcon,
  ],
  standalone: true,
  templateUrl: './program-manager.component.html',
  styleUrl: './program-manager.component.css',
})
export class ProgramManagerComponent {
  programData = programData;
  sidebarVisible = false;
  date: Date | undefined;
  minDate: Date | undefined;
  maxDate: Date | undefined;
  todayDate = new Date();
  cities!: any[];
  selectedCity!: any;
  cascade = cascadeFigmaVariables;

  ngOnInit() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  onShowDefinitions() {
    this.sidebarVisible = true;
  }
}
