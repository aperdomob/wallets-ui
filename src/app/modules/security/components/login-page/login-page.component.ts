import { Component, OnInit } from '@angular/core';
import { FirebaseAuthenticationService } from '../../services/firebase-authentication.service';
import { AesEncryptService } from '../../services/aes-encrypt.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  encrypted: string;
  decrypted: string;

  constructor(public firebaseAuthenticationService: FirebaseAuthenticationService,
    public aesEncrypt: AesEncryptService) { }

  ngOnInit() {
    const testTxt = 'this is my text to encrypt';

    const currentDate = Date.now();
    this.aesEncrypt.setDynamicIv(currentDate);

    this.encrypted = this.aesEncrypt.encrypt(testTxt);

    this.decrypted = this.aesEncrypt.decrypt(this.encrypted);
  }

  public login(): void {
    this.firebaseAuthenticationService.login();
  }

  public logout(): void {
    this.firebaseAuthenticationService.logout();
  }
}
