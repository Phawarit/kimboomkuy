import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'protractor';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';


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
    private router:Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:'',
      password:''
    });
  }

  Submit(): void {     
    this.userService.loginUser( this.form.value)
    .subscribe((res) => {
      console.log(res);
      
      if(res.user && res.user.length > 0 && res.user[0]['email']){
        console.log(res.user[0])
        //console.log(res.user[0]['token'])
        if(this.form.valid == true){
          localStorage.setItem("login", 'true' )
          localStorage.setItem('token', res.user[0]['token'] )
          this.router.navigate(['/home'])
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'เข้าสู่ระบบสำเร็จ',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }if(res.error == 'Invalid email, username or password' ){
        console.log('dfwnijjfi')
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'โปรดใส่รหัสให้ถูกต้อง',
          showConfirmButton: false,
          timer: 1500
        })
      }
      
    }
    // ,(error)=>{
    //   console.log(error)
    // }
    );   
  }
}



  // onSubmit():void{
  //   this.http.post('https://api.arumirite.codes/login',this.form.getRawValue(),)
  //   .subscribe(()=> this.router.navigate(['/home']))
  // }