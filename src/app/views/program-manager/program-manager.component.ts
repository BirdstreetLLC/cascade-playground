import { Component, OnInit } from '@angular/core';
import { GlobalHeaderComponent } from '../../components/global-header/global-header.component';
import { HeaderComponent } from '../../components/program-manager/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import { programData } from '../../services/programData';
import { DatePickerModule } from 'primeng/datepicker';
import { PopoverModule } from 'primeng/popover';
import { Listbox } from 'primeng/listbox';
import { MatIcon } from '@angular/material/icon';
import { cascadeFigmaVariables } from '../../cascade';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-program-manager',
  imports: [
    GlobalHeaderComponent,
    HeaderComponent,
    CardComponent,
    NgFor,
    DatePickerModule,
    PopoverModule,
    Listbox,
    MatIcon,
    ChartComponent
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
  launchDate!: any[];
  selectedLaunchDate!: any;
  programs!: any[];
  selectedPrograms!: any;
  cascade = cascadeFigmaVariables;
  selectedProgramFilter: string = '';
  selectedLaunchDateFilter: string = '';

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
    this.launchDate = [
      { name: 'Launch Date (Decending)', code: 'NY' },
      { name: 'Launch Date (Ascending)', code: 'RM' },
      { name: 'End Date (Decending)', code: 'NY' },
      { name: 'End Date (Ascending)', code: 'RM' },
      { name: 'Program Name (A - Z)', code: 'NY' },
      { name: 'Program Name (Z - A)', code: 'NY' },
    ];
    this.programs = [
      { name: 'Preparing', code: 'NY' },
      { name: 'Building', code: 'RM' },
      { name: 'Launched', code: 'LDN' },
      { name: 'Completed', code: 'IST' },
      { name: 'Canceled', code: 'PRS' },
    ];
  }

  onSelectProgramFilter(event: any) {
    this.selectedProgramFilter = event.option.name;
  }

  onSelectLaunchDateFilter(event: any) {
    this.selectedLaunchDateFilter = event.option.name;
  }

  onShowDefinitions() {
    this.sidebarVisible = true;
  }
}
