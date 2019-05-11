import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';


@Injectable()
export class AuthService{
   URL = 'http://localhost:3000/auth';
   constructor(private http: HttpClient){

   }

   login(userData){
     return this.http.post<any>(`${this.URL}/login`,userData)
        .pipe(
          catchError(
            err=>throwError(err)
          )
        )
   }

   signup(userData){
     const body=JSON.stringify(userData);
     return this.http.post<any>(`${this.URL}/signup`,userData)
       .pipe(
         catchError(
           err=>throwError(err)
         )
       )

   }
}
