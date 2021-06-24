import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CartStore, DetailState } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<DetailState> {  
  constructor(protected store: CartStore ) {
    super(store);
  }

  list$ = this.select(state => state.listdetail)

  get list() {
      return this.store.getValue().listdetail
  }

  get count() {
    return this.store.getValue().count
  }
}