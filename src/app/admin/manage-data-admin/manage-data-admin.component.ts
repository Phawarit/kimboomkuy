import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-data-admin',
  templateUrl: './manage-data-admin.component.html',
  styleUrls: ['./manage-data-admin.component.scss']
})
export class ManageDataAdminComponent implements OnInit {
  manageDataForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { 
    this.manageDataForm = this.formBuilder.group({
      product_name:[''],
      category_id:[''],
      product_img:[''],
      price:[''],
      amount:[''],
      brand:[''],
      description:['']
    })
  }

  ngOnInit(): void {
  }

}
