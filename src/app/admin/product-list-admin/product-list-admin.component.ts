import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { banners } from 'src/app/product/banners';
//import { products } from 'src/app/product/products';

import { CrudService } from './../../service/crud.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.scss']
})
export class ProductListAdminComponent implements OnInit {
  Products:any =[];
  Categories:any;
  //products:any;

  constructor( 
    private crudService:CrudService,
    private http: HttpClient,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProducts().subscribe((res) => {
      console.log(res)
      if (res){
        this.Products = res
      }
    });

    this.userService.getCategories().subscribe((res) => {
      if(res){
        this.Categories = res
      }

    })
    // this.crudService.GetProducts().subscribe(res =>{
    //   console.log(res)
    //   this.Products = res;
    // })
  }

  // delete(id:any, i:any){
  //   console.log(id)
  //   if(window.confirm('Do you want to go ahead?')){
  //     this.crudService.deleteProduct(id).subscribe((res) => {
  //       this.Products.splice(i, 1)
  //     })
  //   }
  // }

}
