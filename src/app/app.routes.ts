import { Routes } from '@angular/router';
import { RangeSelectorComponent } from './components/range-selector/range-selector.component';
import { PersonaGridComponent } from './components/persona-grid/persona-grid.component';

export const routes: Routes = [
  { path: 'range-selector', component: RangeSelectorComponent },
  { path: 'persona-grid', component: PersonaGridComponent },
  { path: '', redirectTo: '/range-selector', pathMatch: 'full' },
];
