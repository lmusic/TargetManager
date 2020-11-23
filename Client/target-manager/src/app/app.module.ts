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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CreateEditTagretDialogComponent } from './create-edit-tagret-dialog/create-edit-tagret-dialog.component';
import { TargetModel } from './models/TargetModel';
import { AuthorizationComponentComponent } from './authorization-component/authorization-component.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponentComponent } from './loading-component/loading-component.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    TargetsTableComponent,
    CreateEditTagretDialogComponent,
    AuthorizationComponentComponent,
    LoadingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
