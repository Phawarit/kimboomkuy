import { Cart } from './../../models/cart.model';
import { ProductDetails } from "src/app/productdetail/productdetail";
import { CartStore } from "./cart.store";
import { CartQuery } from './cart.query';
import { action } from '@datorama/akita';
import { inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';

@Injectable({ providedIn: 'root' })
export class CartService {
  arr :any
  temp = [] 
  
  constructor(private cartStore: CartStore, private cartQuery: CartQuery) {}

  updateUserName(newName: string) {
    // this.cartStore.update({ name: Name });
  } 
  
  @action('[Cart] add cart')
  addToCart(data: ProductDetails) {
   
  

      let arr = localStorage.getItem("mycart") 
      let tmp = JSON.parse(arr as any)
      
      if (!tmp) {
        // not init
        let array = new Array(data)
        localStorage.setItem("mycart",JSON.stringify(array) );
      } else {
        // have data
        let array = tmp 
        array.push(data)
        localStorage.setItem("mycart",JSON.stringify(array) );
      }
      
      // console.log(arr);

      // localStorage.setItem("login_succes", this.arr);

      let count = this.cartQuery.count
      count++
      
      this.cartStore.update(state => ({
              ...state,
              count:count
      }))
      
    // this.items.push(data);
    // console.log(this.items);
    
  }
  
}