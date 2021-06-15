import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submit: boolean = false;
  checkemail: boolean =false;
  form = new FormGroup({
  
    
    // email: new FormControl('', [
    //   Validators.required,
    //   Validators.email
    // ]),
    // password: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(6)
    // ])
    
   });
  constructor( 
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['',[Validators.required,
        Validators.email]],
      password:['',[Validators.required,
        Validators.minLength(6)]]
    });

    console.log(this.form);
    
  }
  onSubmit(){
    console.log(this.form);
    
    alert(JSON.stringify(this.form.value));
  }


  Submit(): void {
    console.log(this.form);
   
    this.submit = true
    if (this.form.valid == true) {
      this.http.post('https://api.arumirite.codes/login', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/home'])); 
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'เข้าสู่ระบบเรียบร้อยจ้า',
        showConfirmButton: false,
        timer: 1700
      })
   
    
    
    
    
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        
      })
    }
    




   
  }



}