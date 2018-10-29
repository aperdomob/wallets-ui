import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletsListComponent } from './modules/wallets/wallets-list/wallets-list.component';
import { LoginPageComponent } from './modules/security/components/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', component: WalletsListComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
