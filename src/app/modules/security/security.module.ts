import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AngularFireModule } from '@angular/fire';
import { FirebaseAuthenticationService } from './services/firebase-authentication.service';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginMenuComponent } from './components/login-menu/login-menu.component';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [LoginPageComponent, LoginMenuComponent],
  providers: [FirebaseAuthenticationService],
  exports: [LoginMenuComponent]
})
export class SecurityModule { }
