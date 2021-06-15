import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { products } from '../product/products';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  product: { name: string; brand: string; price: number; description: string; src: string; bb: string; } | { name: string; brand: string; price: number; description: string; src: string; bb?: undefined; } | undefined;
  addtocart() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'เพิ่มสินค้าเข้าตระกร้าแล้วจ้า',
      showConfirmButton: false,
      timer: 1500
    })
  }

  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }
}
