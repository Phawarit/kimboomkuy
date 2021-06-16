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
  details :  productdetails [] =[];
  data :any;
 
  addtocart() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'เพิ่มสินค้าเข้าตระกร้าแล้วจ้า',
      showConfirmButton: false,
      timer: 1500
    })
  }

  constructor( private route:ActivatedRoute 
   , private http: HttpClient) { }

  ngOnInit(): void {
    this.data= history.state.data
    console.log(history.state.data);
    console.log(this.data.id)
    
    this.http.get< productdetails[]>('https://api.arumirite.codes/products')
    .subscribe(response => {this.details = response;});
    // console.log('details')
   
  }
}
