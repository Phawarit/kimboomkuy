import { Component, OnInit } from '@angular/core';
import { products } from '../product/products'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  products = products;
  prev  = document.querySelector('.prev');
  next = document.querySelector('.next');
  track = document.querySelector('.track');
  

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
