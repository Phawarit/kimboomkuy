import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';
import { CrudService } from '../service/crud.service';
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  //const out = document.getElementById('output');
  info:any;

  register() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'สมัครสมาชิกเรียบร้อยจ้า',
      showConfirmButton: false,
      timer: 1500
    })
  }

  constructor( 
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private crudService: CrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname:['',[
        Validators.required
      ]],
      lname:'',
      email:['',[
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]],
      username:'',
      password:['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      gender:'',
      dob:'',
      user_img:'',
      tel: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      //tel: new FormControl({value:'', disabled: false}),
      address:'',
      invoice_number:''
    })
  }

  submit():void {
    this.http.post('https://api.arumirite.codes/users', this.registerForm.getRawValue())
    .subscribe( res => {
      console.log(res);
      this.info = res
      if(this.info && this.info.length > 3 ){
        if(this.registerForm.valid == true){
          this.router.navigate(['/login'])
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'เข้าสู่ระบบสำเร็จ',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
      if(this.info.error == 'Invalid username or password' ){
        console.log('dfwnijjfi')
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'โปรดใส่รหัสให้ถูกต้อง',
          showConfirmButton: false,
          timer: 1500
        })
      }
      
    });
  }
}












