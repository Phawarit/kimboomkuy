import { Component, OnInit } from '@angular/core';
import { products } from '../product/products'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  products = products;
  
  constructor() { }

  ngOnInit(): void {
  }

}
