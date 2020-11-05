import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TargetsTableComponent } from './targets-table/targets-table.component';

import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    TargetsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
