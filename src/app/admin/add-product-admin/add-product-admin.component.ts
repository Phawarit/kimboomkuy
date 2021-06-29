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
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private crudService: CrudService,
    private router: Router,
    private userService: UserService,
  ) {
    this.productForm = this.formBuilder.group({
      model_id:[''],
      category_id:[''],
      img:[''],
      price:[''],
      available:[''],
      amount:[''],
      color_id:[''],
      brand_id:[''],
      storage_id:[''],
      description:['']
    })
   }

  ngOnInit(): void {
    
  }

  onSubmit():any {
    this.http.post('https://api.arumirite.codes/products', this.productForm.getRawValue)
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
