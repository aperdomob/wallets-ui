import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { UserSession } from './user-session';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService {
  session = new BehaviorSubject<UserSession>(undefined);

  constructor(public angularFirebaseAuth: AngularFireAuth) {}

  public async login() {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.angularFirebaseAuth.auth.signInWithPopup(provider);
    this.updateUser(credentials.user);
  }

  public async logout() {
    await this.angularFirebaseAuth.auth.signOut();
    this.session.next(undefined);
  }

  private updateUser(user: User) {
    const userSession: UserSession = {
      uid: user.uid,
      mail: user.email,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      sessionId: new Date().getTime()
    };

    this.session.next(userSession);
  }
}
