import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsListComponent } from './components/wallets-list/wallets-list.component';
import { WalletsMainComponent } from './components/wallets-main/wallets-main.component';
import {
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule } from '@angular/material';
import { WalletsFormComponent } from './components/wallets-form/wallets-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageModule } from '../storage/storage.module';

@NgModule({
  imports: [
    CommonModule,
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
    StorageModule
  ],
  declarations: [WalletsListComponent, WalletsMainComponent, WalletsFormComponent],
  entryComponents: [WalletsFormComponent]
})
export class WalletsModule { }
