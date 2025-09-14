import { Component, Input } from '@angular/core';
import { cascadeFigmaVariables } from '../../cascade';
import { NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-basic-label',
  imports: [NgIf, MatIcon],
  templateUrl: './basic-label.component.html',
  styleUrl: './basic-label.component.css',
})
export class BasicLabelComponent {
  cascade = cascadeFigmaVariables;
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() onClick: () => void = () => {};
  @Input() isClickable: boolean = false;

  valueIsArray(value: any) {
    return Array.isArray(value) ? value.join(', ') : value;
  }
}
