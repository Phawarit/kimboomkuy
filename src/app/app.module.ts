import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatRadioModule} from '@angular/material/radio';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './sidebar/sidebar.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AdminComponent } from './admin/admin.component';
import { ProductListAdminComponent } from './admin/product-list-admin/product-list-admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HistoryComponent } from './profile/history/history.component';
import { EditProductAdminComponent } from './admin/edit-product-admin/edit-product-admin.component';
import { HistoryDetailComponent } from './profile/history-detail/history-detail.component';
import { TopbarAdminComponent } from './admin/topbar-admin/topbar-admin.component';
import { OrderHistoryComponent } from './admin/order-history/order-history.component';
import { MemberListComponent } from './admin/member-list/member-list.component';
import { TestModule } from './test/test.module';
import { AddProductAdminComponent } from './admin/add-product-admin/add-product-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BannerComponent,
    RegisterComponent,
    SidebarComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ContactComponent,
    HomeComponent,
    ProfileComponent,
    ProductdetailComponent,
    AdminComponent,
    ProductListAdminComponent,
    CheckoutComponent,
    HistoryComponent,
    EditProductAdminComponent,
    HistoryDetailComponent,
    TopbarAdminComponent,
    OrderHistoryComponent,
    MemberListComponent,
    AddProductAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatInputModule,
    RouterModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    HttpClientModule,
    TestModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
