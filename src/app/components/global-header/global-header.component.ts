import { Component } from '@angular/core';
import { cascadeFigmaVariables } from '../../cascade';
@Component({
  selector: 'app-global-header',
  imports: [],
  standalone: true,
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.css'
})
export class GlobalHeaderComponent {
  colors = cascadeFigmaVariables
}
