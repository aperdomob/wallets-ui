import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseAuthenticationService } from '../../services/firebase-authentication.service';
import { UserSession } from '../../services/user-session';
import { WalletSessionService } from '../../services/wallet-session.service';
import { AesEncryptService } from '../../services/aes-encrypt.service';
import { LocalStorageService } from 'src/app/modules/storage/services/local-storage.service';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {
  session: UserSession;

  constructor(
    private firebaseAuthenticationService: FirebaseAuthenticationService,
    private walletSessionService: WalletSessionService,
    private aesEncrypt: AesEncryptService,
    private localStoreService: LocalStorageService) { }

  ngOnInit() {
    this.firebaseAuthenticationService.session.subscribe((user) => {
      if (typeof user !== 'undefined') {
        this.walletSessionService.init({
          mail: user.mail,
          sessionId: user.sessionId
        }).subscribe(() => {
          this.aesEncrypt.setDynamicIv(this.session.sessionId);
          const tokenEncrypted = this.aesEncrypt.encrypt(user.uid);

          this.walletSessionService.login({
            username: this.session.mail,
            password: tokenEncrypted
          }).subscribe((token) => {
            this.session = user;
            this.session.token = token;
          });
        });
      }
    });
  }

  public login(): void {
    this.firebaseAuthenticationService.login();
  }

  public logout(): void {
    this.firebaseAuthenticationService.logout();
  }

  public getImagePath() {
    if (this.session) {
      return this.session.photoUrl;
    }

    return '../../../assets/img/default_avatar.png';
  }

  public isLoggedIn() {
    return typeof this.session !== 'undefined' && this.session !== null;
  }
}
