import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { cascadeFigmaVariables } from '../../cascade';

@Component({
  selector: 'app-table',
  imports: [TableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() tableData: Array<any> = [];
  cascade = cascadeFigmaVariables;
}
