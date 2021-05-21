import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo: 'home'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: BannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
