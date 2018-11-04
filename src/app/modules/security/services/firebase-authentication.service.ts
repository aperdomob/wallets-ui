import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService {
  user = new BehaviorSubject<User>(undefined);

  constructor(public angularFirebaseAuth: AngularFireAuth) {
    this.getUser();
  }

  public async login() {
    await this.angularFirebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.getUser();
  }

  public async logout() {
    await this.angularFirebaseAuth.auth.signOut();
    this.getUser();
  }

  private getUser() {
    this.angularFirebaseAuth.authState.subscribe((user) => {
      this.user.next(user);
    });
  }
}
