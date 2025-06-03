import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { cascadeFigmaVariables } from '../../cascade';

interface Conditional {
  name: string;
  code: string;
}

@Component({
  selector: 'app-select-input',
  imports: [SelectModule],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.css',
})
export class SelectInputComponent {
  colors = cascadeFigmaVariables;
  conditionals: Conditional[] | undefined;

  selectedConditional: Conditional | undefined;
  ngOnInit() {
    this.conditionals = [
      { name: 'Between', code: 'Between' },
      { name: 'Equals', code: 'Equals' },
      { name: 'More Than', code: 'More Than' },
      { name: 'Less Than', code: 'Less Than' },
      { name: 'Does Not Equal', code: 'Does Not Equal' },
    ];
  }
}
