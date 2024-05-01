import { Component } from '@angular/core';
import { FilterChangedEvent, GridOptions } from 'ag-grid-community';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';

interface RowData {
  make: string;
  model: string;
  price: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  debugOutput: string[] = [];
  gridModules = [SetFilterModule];
  gridOptions: GridOptions = {
    defaultColDef: {
      filter: 'agSetColumnFilter',
    },
    columnDefs: [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' },
    ],
    onFilterChanged: (event) => this.onFilterChanged(event),
  };
  removedMake: 'Ford' | 'Toyota' | 'Porsche' | null = null;
  _rowData: RowData[] = [];
  rowData: RowData[] = [];

  ngOnInit() {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((result) => result.json())
      .then((rowData) => {
        this.rowData = rowData;
        this._rowData = rowData;
      });
  }

  filterMake(make: 'Ford' | 'Toyota' | 'Porsche' | null): void {
    this.removedMake = make;
    this.rowData = this._rowData.filter((row) => row.make !== make);
  }

  onFilterChanged(event: FilterChangedEvent): void {
    this.debugOutput.push(JSON.stringify(event.api.getFilterModel()));
  }
}
