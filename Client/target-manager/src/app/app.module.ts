import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TargetsTableComponent } from './targets-table/targets-table.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { TableModule } from 'primeng/table';
import { MatDialogModule } from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { CreateEditTagretDialogComponent } from './create-edit-tagret-dialog/create-edit-tagret-dialog.component';
import { TargetModel } from './models/TargetModel';
@NgModule({
  declarations: [
    AppComponent,
    TargetsTableComponent,
    CreateEditTagretDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
