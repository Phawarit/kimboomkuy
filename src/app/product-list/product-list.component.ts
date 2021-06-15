import { Component, OnInit } from '@angular/core';
import { banners } from '../product/banners';
import { products } from '../product/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  banners = banners;
  products = products;

  
  constructor() { }

  ngOnInit(): void {
  }

}
