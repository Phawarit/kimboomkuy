import { Component, OnInit } from '@angular/core';
import { banners } from 'src/app/product/banners';
//import { products } from 'src/app/product/products';

import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.scss']
})
export class ProductListAdminComponent implements OnInit {
  Products:any =[];
  //banners = banners;
  //products = products;
  constructor( private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.GetProducts().subscribe(res =>{
      console.log(res)
      this.Products = res;
    })
  }

  delete(id:any, i:any){
    console.log(id)
    if(window.confirm('Do you want to go ahead?')){
      this.crudService.deleteProduct(id).subscribe((res) => {
        this.Products.splice(i, 1)
      })
    }
  }

}
