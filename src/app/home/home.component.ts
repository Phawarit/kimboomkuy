import { Component, OnInit } from '@angular/core';
import { products } from '../product/products';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: { id: number; name: string; brand: string; price: number; description: string; src: string; bb: string; } | { id: number; name: string; brand: string; price: number; description: string; src: string; bb?: undefined; } | undefined;
  products = products;
  test:any;
  constructor( private route:ActivatedRoute,
    private http: HttpClient,
    private userService: UserService, ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);

  // this.http.get('https://api.arumirite.codes/users', { withCredentials:true}).subscribe(
  //     res => {
  //       console.log(res);
  //       //this.message = `hi ${res.lName}`
  //     },
  //     err => {
  //       console.log(err);
  //       //this.message = 'you not login'
  //     }
  //   )
  }

}