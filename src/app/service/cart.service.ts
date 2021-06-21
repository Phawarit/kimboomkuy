import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   items :any =   [] ;
   constructor(
    private http: HttpClient
  ) {}

  addToCart(data: any) {
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