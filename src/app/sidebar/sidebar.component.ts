import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { products } from '../product/products'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  product: { name: string; brand: string; price: number; description: string; src: string; bb: string; } | { name: string; brand: string; price: number; description: string; src: string; bb?: undefined; } | undefined;
  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

}
