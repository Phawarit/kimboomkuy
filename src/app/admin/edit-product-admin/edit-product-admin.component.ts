import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgZone } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-edit-product-admin',
  templateUrl: './edit-product-admin.component.html',
  styleUrls: ['./edit-product-admin.component.scss']
})
export class EditProductAdminComponent implements OnInit {
  getId:any ;
  updateForm!: FormGroup;

  constructor(
    public formBuiler: FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetProduct(this.getId).subscribe( res => {
      this.updateForm.setValue({
        name: res['name'],
        price:res['price'],
        description: res['description']
      })
      
    })

    this.updateForm = this.formBuiler.group({
      name: [''],
      price:[''],
      description: ['']
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any{
    this.crudService.updateProduct(this.getId,this.updateForm.value).subscribe(()=>{
      console.log('data update successful');
      this.ngZone.run(() => this.router.navigateByUrl('/product-list-admin'))
    },(err) => {
      console.log(err)
    })
  }

}
