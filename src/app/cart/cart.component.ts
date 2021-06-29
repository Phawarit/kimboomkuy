import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { FormBuilder } from '@angular/forms'
import { ProdutCart } from './productcart-get';
import { CartService } from './../service/cart.service';
import { Cart } from '../models/cart.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemCart:any;
  countitem: number = 0
  cart :   ProdutCart [] =[];
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
   
    
    
    this.itemCart = localStorage.getItem('mycart')
    this.itemCart = JSON.parse(this.itemCart)
    

    
    console.log('itemCart')
    console.log(this.itemCart)
    console.log('this.items');
    console.log(this.items);
    
    this.countitem = this.itemCart.length;
    console.log(this.countitem);
    // const id  = this.route.snapshot.params.productId
    // console.log(id);


     
    this.http.get< ProdutCart []>(`https://api.arumirite.codes/products/1`)
    
    .subscribe(response => {this.  cart = response; 
      // console.log(response)
    } );
    // console.log('details')
  }

  getItem():Cart[] {
    return this.cartService.getItems();
  }
  increase(){
    this.itemCart.push()
    localStorage.clearItem('mycart',JSON.stringify(this.itemCart))
    
      
  }


  decrease(){
    this.itemCart.pop()
    console.log(this.itemCart)
    localStorage.setItem('mycart',JSON.stringify(this.itemCart))
    

  }

  
}

