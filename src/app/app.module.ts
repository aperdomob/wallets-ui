import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MAT_DATE_LOCALE } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletsModule } from './modules/wallets/wallets.module';

import { SecurityModule } from './modules/security/security.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    WalletsModule,
    SecurityModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: { useUtc: true }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
