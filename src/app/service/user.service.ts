import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    
    constructor(
        private http:HttpClient
      ) { }

    getdetailMember(){
        return this.http.get('./../assets/data/user.json')
    }

    
  

}
