import { Component, OnInit } from '@angular/core';
import { products } from '../product/products';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: { id: number; name: string; brand: string; price: number; description: string; src: string; bb: string; } | { id: number; name: string; brand: string; price: number; description: string; src: string; bb?: undefined; } | undefined;
  products = products;
  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

}
