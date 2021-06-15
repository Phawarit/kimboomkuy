import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor( 
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:'',
      password:''
    });
  }

  Submit(): void {     
    this.http.post('https://api.arumirite.codes/login', this.form.getRawValue())
    .subscribe( res => {
      console.log(res)
      this.router.navigate(['/home'])
    });   
  }
}



  // onSubmit():void{
  //   this.http.post('https://api.arumirite.codes/login',this.form.getRawValue(),)
  //   .subscribe(()=> this.router.navigate(['/home']))
  // }