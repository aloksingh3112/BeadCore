import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()
export class AuthService{
   URL = 'http://localhost:3000/auth';
   url='http://localhost:3000';
   private socket;
   constructor(private http: HttpClient){
       this.socket=io.connect(this.url);
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
