import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { cascadeFigmaVariables } from '../cascade';

interface Conditional {
  name: string;
  code: string;
}

@Component({
  selector: 'app-range-selector',
  imports: [SelectModule, InputTextModule],
  standalone: true,
  templateUrl: './range-selector.component.html',
  styleUrl: './range-selector.component.css',
})
export class RangeSelectorComponent {
  conditionals: Conditional[] | undefined;

  selectedConditional: Conditional | undefined;

  colors = cascadeFigmaVariables;

  onChange(event: any) {
    console.log(event);
  }

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
