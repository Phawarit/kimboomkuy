import { Component, OnInit } from '@angular/core';
import { products } from '../product/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
