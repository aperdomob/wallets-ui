import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService {
  user: Observable<User>;
  constructor(public angularFirebaseAuth: AngularFireAuth) {
    this.user = angularFirebaseAuth.authState;
  }

  public login() {
    this.angularFirebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public logout() {
    this.angularFirebaseAuth.auth.signOut();
  }
}
