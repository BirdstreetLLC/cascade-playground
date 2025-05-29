import { Routes } from '@angular/router';
import { RangeSelectorComponent } from './range-selector/range-selector.component';
import { PersonaGridComponent } from './persona-grid/persona-grid.component';

export const routes: Routes = [
  { path: 'range-selector', component: RangeSelectorComponent },
  { path: 'persona-grid', component: PersonaGridComponent },
];
