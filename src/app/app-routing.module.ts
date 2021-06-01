import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { ActivatedRoute } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CartComponent } from './cart/cart.component';
import { ProductListAdminComponent } from './admin/product-list-admin/product-list-admin.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo: 'home'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'registerpage', component: RegisterComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'products/:productId', component: SidebarComponent},
  { path: 'cart', component: CartComponent},
  { path: 'product-list-admin', component: ProductListAdminComponent},
  { path: 'checkout', component: CheckoutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
