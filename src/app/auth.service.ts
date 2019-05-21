import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class AuthService{
   URL = 'http://localhost:3000';

   constructor(private http: HttpClient){

   }

   login(userData){
     return this.http.post<any>(`${this.URL}/auth/login`,userData)
        .pipe(
          catchError(
            err => throwError(err)
          )
        )
   }

   signup(userData){
     const body=JSON.stringify(userData);
     return this.http.post<any>(`${this.URL}/auth/signup`,userData)
       .pipe(
         catchError(
           err=>throwError(err)
         )
       )

   }


   getUser(){
     return this.http.get<any>(`${this.URL}/user/getuser`)
     .pipe(
      catchError(
        err=>throwError(err)
      )
    )
   }



}
