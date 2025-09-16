import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../../components/global-header/global-header.component';
import { HeaderComponent } from '../../components/program-manager/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import { programData } from '../../services/programData';

@Component({
  selector: 'app-program-manager',
  imports: [GlobalHeaderComponent, HeaderComponent, CardComponent, NgFor],
  standalone: true,
  templateUrl: './program-manager.component.html',
  styleUrl: './program-manager.component.css',
})
export class ProgramManagerComponent {
  programData = programData;
  sidebarVisible = false;

  onShowDefinitions() {
    this.sidebarVisible = true;
  }
}
