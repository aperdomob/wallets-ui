import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsListComponent } from './components/wallets-list/wallets-list.component';
import { WalletsMainComponent } from './components/wallets-main/wallets-main.component';
import {
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule, MatCheckboxModule, MAT_DATE_LOCALE } from '@angular/material';
import { WalletsFormComponent } from './components/wallets-form/wallets-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageModule } from '../storage/storage.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatNativeDateModule,
    StorageModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: { useUtc: true } }
  ],
  declarations: [WalletsListComponent, WalletsMainComponent, WalletsFormComponent],
  entryComponents: [WalletsFormComponent]
})
export class WalletsModule { }
