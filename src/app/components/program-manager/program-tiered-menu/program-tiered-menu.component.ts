import { Component, Input } from '@angular/core';
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
  @Input() isPublished: boolean = false;

  ngOnInit() {
    this.items = [
      {
        label: this.isPublished ? 'Unpublish Program' : 'Publish Program',
        icon: 'publish',
        command: () =>
          this.isPublished
            ? this.onUnpublishProgram()
            : this.onPublishProgram(),
      },
    ];
  }

  onClick(event: any) {
    console.log(event);
  }

  onPublishProgram() {
    console.log('Publish Program');
  }

  onUnpublishProgram() {
    console.log('Unpublish Program');
  }
}
