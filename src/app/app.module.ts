import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LicenseManager } from '@ag-grid-enterprise/core';
import { ModuleRegistry } from '@ag-grid-community/core';
import { NgModule } from '@angular/core';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    LicenseManager.setLicenseKey(/* your license here for enterprise features*/);

    ModuleRegistry.registerModules([SetFilterModule]);
  }
}
