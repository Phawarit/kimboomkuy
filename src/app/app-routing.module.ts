import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { HistoryComponent } from './profile/history/history.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { EditProductAdminComponent } from './admin/edit-product-admin/edit-product-admin.component';
import { HistoryDetailComponent } from './profile/history-detail/history-detail.component';
import { OrderHistoryComponent } from './admin/order-history/order-history.component';
import { MemberListComponent } from './admin/member-list/member-list.component';
import { AddProductAdminComponent } from './admin/add-product-admin/add-product-admin.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { ProfileadminComponent } from './admin/profileadmin/profileadmin.component';

const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo: 'home'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'registerpage', component: RegisterComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'products/:productId', component: ProductdetailComponent},
  { path: 'cart/:productcart', component: CartComponent},
  { path: 'product-list-admin', component: ProductListAdminComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'product-detail', component: ProductdetailComponent},
  { path: 'edit-product-admin', component: EditProductAdminComponent },
  { path: 'producttail', component: ProductdetailComponent },
  { path: 'history-detail', component: HistoryDetailComponent },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'member', component: MemberListComponent, canActivate: [LoginGuardGuard] },
  { path: 'add-product-admin', component: AddProductAdminComponent },
  { path: 'profile-admin', component: ProfileadminComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





 //{ path: 'edit-product-admin/:id', component: EditProductAdminComponent },
 //{ path: 'member', component: MemberListComponent },