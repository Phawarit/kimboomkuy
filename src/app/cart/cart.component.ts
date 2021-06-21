import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { FormBuilder } from '@angular/forms'
import { productcart } from './productcart-get';
import { CartService } from './../service/cart.service';
import { Cart } from '../models/cart.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart :  productcart [] =[];
  items:Cart[] = [];
  
  // const id  = this.route.snapshot.params.productId
  constructor(
    private route: ActivatedRoute,
    private formBuilder:FormBuilder,
    private http: HttpClient,
    private cartService: CartService
  )
  {
    this.items = this.cartService.getItems()
   }

  async ngOnInit(): Promise<void> {
    this.items =  this.getItem()
    console.log('this.items');
    console.log(this.items);
    
    // const id  = this.route.snapshot.params.productId
    // console.log(id);


     
    this.http.get<productcart  []>(`https://api.arumirite.codes/products/1`)
    
    .subscribe(response => {this.  cart = response; 
      // console.log(response)
    } );
    // console.log('details')
  }

  getItem():Cart[] {
    return this.cartService.getItems();
  }

  
}

