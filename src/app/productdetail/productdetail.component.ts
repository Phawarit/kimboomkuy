import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  addtocart() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'เพิ่มสินค้าเข้าตระกร้าแล้วจ้า',
      showConfirmButton: false,
      timer: 1500
    })
   
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
