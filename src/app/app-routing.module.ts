import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './modules/security/components/login-page/login-page.component';
import { WalletsMainComponent } from './modules/wallets/components/wallets-main/wallets-main.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'wallets', component: WalletsMainComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
