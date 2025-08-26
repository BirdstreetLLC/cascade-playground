import { Component, Input, booleanAttribute } from '@angular/core';
import { NgIf } from '@angular/common';
import { cascadeFigmaVariables } from '../../../cascade';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [NgIf, Button],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() definitions: boolean = false;
  booleanAttribute = this.definitions;
  cascade = cascadeFigmaVariables;
}
