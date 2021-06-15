import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.scss']
})
export class AddProductAdminComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
  ) {
    this.productForm = this.formBuilder.group({
      name: [''],
      price:[''],
      description:['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit():any {
    this.crudService.AddProduct(this.productForm.value)
    .subscribe(() => {
      console.log("Data added successfilly");
      this.ngZone.run(() => this.router.navigateByUrl('/product-list-admin'))
    },(err) =>{
      console.log(err);
    })
  }

}
