import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  

  constructor(
    private formBuilder:FormBuilder
  ) {
    this.items = this.getItem()
    
   }

  ngOnInit(): void {
    this.items = this.getItem()
  }

  getItem():any{
    return this.items;
  }

  
}

