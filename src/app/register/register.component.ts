import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  tel: any;
  
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
  ) { 
      
    }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fName:'',
      lName:'',
      email:'',
      username:'',
      password:'',
      gender:'',
      dob:'',
      user_img:'',
      tel: new FormControl({value:'0258', disabled: true}),
      address:'',
      invoice_number:'',
      test:new FormControl({value: '', disabled: true})
    })
    
  }

  submit():void {
    //console.log(this.registerForm.getRawValue())
    this.http.post('https://api.arumirite.codes/users', this.registerForm.getRawValue())
    .subscribe( res => {
      console.log(res);
      this.router.navigate(['/login'])
    });
  }

  // submit(): void {     
  //   this.http.post('https://api.arumirite.codes/login', this.registerForm.getRawValue())
  //   .subscribe(() => this.router.navigate(['/home'])); console.log   }

  // submit(): void{
  //   console.log(this.registerForm.getRawValue());
  //   this.http.post('https://api.arumirite.codes',this.registerForm.getRawValue())
  //     .subscribe( res => {
  //       console.log(res)
  //       this.router.navigate(['/home'])
  //     })
  // }


}
