import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  detailInformation: any;
  Profile:any;
  updateProfileForm!: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router
  ) { 
    this.userService.getUser().subscribe( (res) => {
      console.log(res)
      this.Profile = res
      console.log(this.Profile[0]['email'])
      this.updateProfileForm.setValue({
        email: this.Profile[0]['email'],
        username: this.Profile[0]['username'],
        fname: this.Profile[0]['fname'],
        lname: this.Profile[0]['lname'],
        dob: this.Profile[0]['dob'],
        invoice_number: this.Profile[0]['invoice_number'],
        tel: this.Profile[0]['tel'],
        address: this.Profile[0]['address']
      })
    })
    this.updateProfileForm = this.formBuilder.group({
      email:[''],
      username:[''],
      fname:[''],
      lname:[''],
      dob:[''],
      invoice_number:[''],
      tel:[''],
      address:['']
    })

    
    
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((res) =>{
      this.Profile = res
    })
  }

  onUpdate(): any{
    this.userService.upDateProfile(this.updateProfileForm.value).subscribe(() => {
      console.log('update success')
    })
  }
}
