import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDetails } from '../productdetail/productdetail';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   items :any =   [] ;
   constructor(
    private http: HttpClient
  ) {}

  addToCart(data: ProductDetails) {
    this.items.push(data);
    console.log(this.items);
    
  }

  // delToCart(product: { id: number; name: string; price: number; description: string; } | undefined ) {
  //   this.items.pop(product );
  // }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}