import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';




@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{
   isData = false;
   userData:any[];
   a=moment();

  constructor(private authService: AuthService,private route:Router){

  }
  ngOnInit(){
    const token = localStorage.getItem('token');
    if(this.getDecodedAccessToken(token)){
      const tokenvalue =this.getDecodedAccessToken(token);
      this.authService.getUser()
      .subscribe(
        data=> {
        const array:any[]=data.data.filter(d=>d.logintime!=null);
        const  index = array.findIndex(i=>i._id==tokenvalue.data._id);
        array.splice(index,1) ;

        if(array.length>0){
         this.userData =[...array];

        }

       },
        err=>console.log(err)
      )
    } else {
       localStorage.removeItem('token');
       this.route.navigateByUrl('/login');
    }

  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    } catch (Error) {
        return null;
    }
  }

  getDiff(time){
    const due =  this.a.diff(time,'minutes');
    if(!due ){
      return 'LOGIN'
    }
    else if(due<=1){
      return 'JUST NOW'
    }
    else
    {
      return `${due} minutes ago`
    }
  }
}
