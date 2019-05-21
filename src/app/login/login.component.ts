import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.scss']
})
export class LoginComponent{
  message;
  constructor(private authService: AuthService,private router: Router){}
   login(form: NgForm){
     this.message= null;
     this.authService.login(form.value)
       .subscribe(
         data=>{
           this.message= data.message;
           form.reset();
           console.log(data);
           if(data.status == 200){
             localStorage.setItem('token',data.token);
             this.router.navigate(['/home']);
           }

         },
         err=>{}
       )
   }

}
