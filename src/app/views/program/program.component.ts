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
import { Observable } from 'rxjs';
import { TableComponent } from "../../components/table/table.component";
import { programManagerPrototypeImg } from '../../consts/consts';

@Component({
  selector: 'app-program',
  imports: [
    GlobalHeaderComponent,
    HeaderComponent,
    TabMenuModule,
    ButtonModule,
    NgIf,
    TableComponent
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
  }

  onActiveItemChange(event: MenuItem): void {
    this.activeItem = event;
    console.log('click');
  }

  public handleOnClick(): void {
    this.onActiveItemChange(this.items[1]);
  }
}
