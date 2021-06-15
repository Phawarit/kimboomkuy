import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
export class Product {
  _id!:String;
  name!:String;
  price!:String;
  description!:String;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Node
  REST_API: String = 'http://localhost:8000/api';

  //Http
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private httpClient: HttpClient ) { }

  // Add
  AddProduct(data: Product): Observable<any>{
    let API_URL = `${this.REST_API}/add-product-admin`;
    return this.httpClient.post(API_URL, data)
     .pipe(
       catchError(this.handleError)
     )
  }

  //get all oj
  GetProducts(){
    return this.httpClient.get(`${this.REST_API}`);
  }

  //get single oj
  GetProduct(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/read-product/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res:any) => {
        return res || {}
      }),
      catchError(this.handleError))
  }

  //update
  updateProduct(id:any, data:any):Observable<any>{
    let API_URL = `${this.REST_API}/update-product/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
      
  }

  //deleate
  deleteProduct(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/delete-product/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  //error
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      //client
      errorMessage = error.error.message
    }else{
      //server
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  

}
