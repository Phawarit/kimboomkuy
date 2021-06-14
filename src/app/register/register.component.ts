import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import { ActivatedRoute } from '@angular/router';

import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  register() {




    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'สมัครสมาชิกเรียบร้อยจ้า',
      showConfirmButton: false,
      timer: 1500
    })
   
  }

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

}
