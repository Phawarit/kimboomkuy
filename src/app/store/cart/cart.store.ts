import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { ProductDetails } from 'src/app/productdetail/productdetail';


export interface DetailState {
   listdetail : ProductDetails [],
   count : number
}

export function createInitialState(): DetailState {
  return {
    listdetail : [],
    count: 0
  };
}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Cart' })
export class CartStore extends Store<DetailState> {
  constructor() {
    super(createInitialState());
  }
}