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

  constructor() {
    this.items = [
      {
        label: 'Publish Program',
        icon: 'publish',
        command: () => this.onPublishProgram(),
      },
      {
        label: 'Edit',
        icon: 'edit',
        command: () => this.onEditProgram(),
      },
      {
        label: 'Delete',
        icon: 'delete',
        command: () => this.onDeleteProgram(),
      },
    ];
  }

  onClick(event: any) {
    console.log(event);
  }

  onActiveItemChange(event: MenuItem) {
    console.log(event);
  }

  onPublishProgram() {
    console.log('Publish Program');
  }

  onUnpublishProgram() {
    console.log('Unpublish Program');
  }

  onEditProgram() {
    console.log('Edit Program');
  }

  onDeleteProgram() {
    console.log('Delete Program');
  }
}
