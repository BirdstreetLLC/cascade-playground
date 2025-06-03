import { Routes } from '@angular/router';
import { RangeSelectorComponent } from './components/range-selector/range-selector.component';
import { PersonaGridComponent } from './components/persona-grid/persona-grid.component';
import { SelectInputComponent } from './components/select-input/select-input.component';

export const routes: Routes = [
  { path: 'range-selector', component: RangeSelectorComponent },
  { path: 'persona-grid', component: PersonaGridComponent },
  { path: 'select-input', component: SelectInputComponent },
  { path: '', redirectTo: '/range-selector', pathMatch: 'full' },
];
