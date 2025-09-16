import { Component, Input } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
@Component({
  selector: 'app-sidebar-definitions',
  imports: [SidebarModule],
  templateUrl: './sidebar-definitions.component.html',
  styleUrl: './sidebar-definitions.component.css'
})
export class SidebarDefinitionsComponent {
  @Input() sidebarVisible: boolean = false;


}
