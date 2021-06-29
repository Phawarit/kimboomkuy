import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  REST_API: String = 'https://api.arumirite.codes';

  private API_URL= environment.API_URL;

  //Http
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
    constructor(
        private http:HttpClient
      ) { }
    
    registerUser(user:any){
      return this.http.post<any>('https://api.arumirite.codes/users',user)
    }

    loginUser(user:any){
      return this.http.post<any>('https://api.arumirite.codes/login',user)
    }

    getdetailMember(){
        return this.http.get(`${this.API_URL}/users_list`)
    }
    
    getProducts(){
      return this.http.get('https://api.arumirite.codes/products')
    }


    getUser(){
        return this.http.get('https://api.arumirite.codes/auto_login')
    }

    getCategories(){
      return this.http.get(`${this.API_URL}/categories`)
    }

    upDateProfile(data:any){
      return this.http.patch(`${this.API_URL}/users`,data)
    }

    postProduct(product:any){
      return this.http.post(`${this.API_URL}/products`,product)
    }


  
}
