import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.scss']
})
export class AddProductAdminComponent implements OnInit {
  productForm: FormGroup;
  Brand: any;
  Storage: any;
  Color:any;
  Model:any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private crudService: CrudService,
    private router: Router,
    private userService: UserService,
  ) {
    this.productForm = this.formBuilder.group({
      brand_id: [''],
      model_id: [''],
      category_id: 1,
      //img:[''],
      price:[''],
      //available:[''],
      amount:[''],
      color_id:[''],
      storage_id:[''],
      description:['']
    })
   }

  ngOnInit(): void {
    this.userService.getBrand().subscribe((res)=>{
      this.Brand = res
      console.log(this.Brand)
    })

    this.userService.getStorages().subscribe((res)=>{
      this.Storage = res
    })

    this.userService.getColor().subscribe((res)=>{
      this.Color = res
    })

    this.userService.getModels().subscribe((res)=>{
      this.Model = res
    })

  }

  onSubmit():void {
    console.log(this.productForm.value)
    this.http.post('https://api.arumirite.codes/products', this.productForm.getRawValue())
    .subscribe( res => {
      console.log(res);
    });

    // this.crudService.AddProduct(this.productForm.value)
    // .subscribe(() => {
    //   console.log("Data added successfilly");
    //   this.ngZone.run(() => this.router.navigateByUrl('/product-list-admin'))
    // },(err) =>{
    //   console.log(err);
    // })
  }

}

interface productForm {
  brand_id: number,
  model_id:number,
  category_id:number,
      //img:[''],
  price:number,
      //available:[''],
  amount:number,
  color_id:number,
  storage_id:number,
  description:string
}
