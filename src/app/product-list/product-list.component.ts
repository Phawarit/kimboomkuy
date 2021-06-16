import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { banners } from '../product/banners';
import { products } from '../product/products';
import { allproduct } from './productlist-get';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList:  allproduct [] =[];
  banners = banners;
  products = products;

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<allproduct []>('https://api.arumirite.codes/products')
    .subscribe(response => {this.productList= response;});
  }

  }


