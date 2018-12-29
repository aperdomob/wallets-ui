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
  MatCheckboxModule,
  MatNativeDateModule,
  MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { WalletsFormComponent } from './components/wallets-form/wallets-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageModule } from '../storage/storage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletDetailComponent } from './components/wallet-detail/wallet-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { WalletMovementComponent } from './components/wallet-movement/wallet-movement.component';
import { WalletMovementFormComponent } from './components/wallet-movement-form/wallet-movement-form.component';
import { BrowserModule } from '@angular/platform-browser';

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
    MatTableModule,
    StorageModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  declarations: [
    WalletsListComponent,
    WalletsMainComponent,
    WalletsFormComponent, WalletDetailComponent, WalletMovementComponent, WalletMovementFormComponent],
  entryComponents: [
    WalletsFormComponent,
    WalletMovementFormComponent
  ]
})
export class WalletsModule { }
