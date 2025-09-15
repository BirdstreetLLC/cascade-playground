import { Component } from '@angular/core';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { programTieredActions } from '../../../services/programTieredActions';
import { MenuItem } from 'primeng/api';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-program-tiered-menu',
  imports: [TieredMenuModule, MatIcon],
  templateUrl: './program-tiered-menu.component.html',
  styleUrl: './program-tiered-menu.component.css',
})
export class ProgramTieredMenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = programTieredActions;
  }
}
