import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.scss']
})
export class LoginComponent{
  message;
  constructor(private authService: AuthService){}
   login(form: NgForm){
     this.message= null;
     this.authService.login(form.value)
       .subscribe(
         data=>{
           this.message= data.message;
           form.reset();
         },
         err=>{}
       )
   }

}
