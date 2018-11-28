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
  MatNativeDateModule, MatCheckboxModule, MAT_DATE_LOCALE, MatTableModule, MatPaginatorModule } from '@angular/material';
import { WalletsFormComponent } from './components/wallets-form/wallets-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageModule } from '../storage/storage.module';
import { FormsModule } from '@angular/forms';
import { WalletDetailComponent } from './wallet-detail/wallet-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

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
    MatTableModule,
    StorageModule,
    MatPaginatorModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: { useUtc: true } }
  ],
  declarations: [WalletsListComponent, WalletsMainComponent, WalletsFormComponent, WalletDetailComponent, StorageModule],
  entryComponents: [WalletsFormComponent]
})
export class WalletsModule { }
