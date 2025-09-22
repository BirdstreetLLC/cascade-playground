import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalHeaderComponent } from '../../components/global-header/global-header.component';
import { HeaderComponent } from '../../components/program-manager/header/header.component';
import { programData } from '../../services/programData';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { cascadeFigmaVariables } from '../../cascade';
import { NgIf } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { programManagerPrototypeImg } from '../../consts/consts';
import { memberData } from '../../services/memberData';
import { Button } from 'primeng/button';
import { MatIcon } from '@angular/material/icon';
import { ChartComponent } from '../../components/chart/chart.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-program',
  imports: [
    GlobalHeaderComponent,
    ChartComponent,
    HeaderComponent,
    TabMenuModule,
    ButtonModule,
    NgIf,
    TableComponent,
    DialogModule,
    Button,
    MatIcon,
  ],
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
})
export class ProgramComponent implements OnInit {
  items: MenuItem[] = [];
  public activeItem: MenuItem = { label: 'Overview' };
  programData = programData;
  title: string = '';
  currentProgram: any = {};
  cascade = cascadeFigmaVariables;
  programManagerScreen = programManagerPrototypeImg;
  memberList = memberData?.rows ?? [];
  chartData: any[] = [];
  chartKeys: any[] = [];
  visible: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title') ?? '';
    this.items = [
      { label: 'Overview' },
      { label: 'Insights' },
      { label: 'Member List' },
    ];
    this.activeItem = this.items[0];

    if (this.programData && this.title) {
      const foundProgram = this.programData.find(
        (program) => program.title === this.title,
      );
      if (foundProgram) {
        this.currentProgram = foundProgram;
      }
    }
    this.chartData = [
      this.currentProgram.memberList,
      this.currentProgram.engaged,
      this.currentProgram.memberList - this.currentProgram.engaged,
    ];
    this.chartKeys = ['Member List', 'Engaged', 'Unengaged'];
  }

  onActiveItemChange(event: MenuItem): void {
    this.activeItem = event;
  }

  onViewMembers(): void {
    this.activeItem = { label: 'Member List' };
  }
  showDialog() {
    this.visible = true;
    console.log('clicked');
  }
}
