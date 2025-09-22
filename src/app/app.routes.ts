import { Routes } from '@angular/router';
import { RangeSelectorComponent } from './components/range-selector/range-selector.component';
import { PersonaGridComponent } from './components/persona-grid/persona-grid.component';
import { SelectInputComponent } from './components/select-input/select-input.component';
import { AskDpiComponent } from './views/ask-dpi/ask-dpi.component';
import { ProgramManagerComponent } from './views/program-manager/program-manager.component';
import { ProgramComponent } from './views/program/program.component';

export const routes: Routes = [
  { path: 'range-selector', component: RangeSelectorComponent },
  { path: 'persona-grid', component: PersonaGridComponent },
  { path: 'select-input', component: SelectInputComponent },
  { path: 'ask-dpi', component: AskDpiComponent },
  { path: 'program-manager', component: ProgramManagerComponent },
  { path: 'program/:title', component: ProgramComponent },
  { path: '', redirectTo: '/program-manager', pathMatch: 'full' },
];
