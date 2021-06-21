import { CartService } from './../service/cart.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { products } from '../product/products';
import { productdetails } from './productdetail';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  details: productdetails[] = [];
  data: any;
  id: any;

  addtocart(data: any) {
    console.log(data);
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'เพิ่มสินค้าเข้าตระกร้าแล้วจ้า',
      showConfirmButton: false,
      timer: 1500
    }),
      this.cartService.addToCart(data[0])
      console.log(data[0]);
      
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


    this.http.get<productdetails[]>(`https://api.arumirite.codes/products/${this.id}`)
      .subscribe(response => {
        this.details = response;
        console.log(response)
      });
    // console.log('details')

  }
}
