import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MatMenuModule} from '@angular/material/menu';
import { ContactComponent } from './contact/contact.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import {MatTabsModule} from '@angular/material/tabs';


import { AdminComponent } from './admin/admin.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ProductListAdminComponent } from './admin/product-list-admin/product-list-admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HistoryComponent } from './profile/history/history.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { ProfileadminComponent } from './admin/profileadmin/profileadmin.component';
import { TestRequestGetComponent } from './test-request-get/test-request-get.component';
import { FriendComponent } from './friend/friend.component';


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

    EditproductComponent,
    ProfileadminComponent,
    TestRequestGetComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
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
    FormsModule , 
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
