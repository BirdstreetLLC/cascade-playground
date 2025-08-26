import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../../components/global-header/global-header.component';
import { HeaderComponent } from '../../components/program-manager/header/header.component';

@Component({
  selector: 'app-program-manager',
  imports: [GlobalHeaderComponent, HeaderComponent],
  standalone: true,
  templateUrl: './program-manager.component.html',
  styleUrl: './program-manager.component.css'
})
export class ProgramManagerComponent {

}
