import { Component, OnInit } from '@angular/core';
import { FirebaseAuthenticationService } from '../../services/firebase-authentication.service';
import { User } from 'firebase';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {
  user: User;

  constructor(public firebaseAuthenticationService: FirebaseAuthenticationService) { }

  ngOnInit() {
    this.firebaseAuthenticationService.user.subscribe(user => this.user = user);
  }

  public login(): void {
    this.firebaseAuthenticationService.login();
  }

  public logout(): void {
    this.firebaseAuthenticationService.logout();
  }

  public getImagePath() {
    if (this.user) {
      return this.user.photoURL;
    }

    return '../../../assets/img/default_avatar.png';
  }
}
