import { Component, OnInit } from '@angular/core';
import { FirebaseAuthenticationService } from '../../services/firebase-authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(public firebaseAuthenticationService: FirebaseAuthenticationService) { }

  ngOnInit() {
  }

  public login(): void {
    this.firebaseAuthenticationService.login();
  }

  public logout(): void {
    this.firebaseAuthenticationService.logout();
  }
}
