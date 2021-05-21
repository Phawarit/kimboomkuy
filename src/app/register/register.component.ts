import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'สมัครสมาชิกเรียบร้อยจ้า',
      showConfirmButton: false,
      timer: 1500
    })
   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
