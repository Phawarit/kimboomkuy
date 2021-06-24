import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

import { CartService } from '../store/cart/cart.service';
import { ProductDetails } from './productdetail';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  details: ProductDetails | any
  data: any;
  id: any;

  addtocart(data: ProductDetails) {
    // localStorage.setItem("login_succes",data );
    // console.log(data);
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'เพิ่มสินค้าเข้าตระกร้าแล้วจ้า',
      showConfirmButton: false,
      timer: 1500
    }),
      this.cartService.addToCart(data)
      console.log('data');
      console.log(data);
     
      
      
      
      
  }

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private cartService: CartService
  ) { }


  ngOnInit(): void {
    // this.data= history.state.data
    // console.log(history.state.data);
    // console.log(this.data.id)

    this.id = this.route.snapshot.params.productId


    this.http.get<ProductDetails[]>(`https://api.arumirite.codes/products/${this.id}`)
      .subscribe(response => {
        this.details = response[0];
        console.log(response)
      });
    // console.log('details')

  }
}
