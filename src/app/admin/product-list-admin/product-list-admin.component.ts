import { Component, OnInit } from '@angular/core';
import { banners } from 'src/app/product/banners';
import { products } from 'src/app/product/products';

@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.scss']
})
export class ProductListAdminComponent implements OnInit {
  banners = banners;
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
