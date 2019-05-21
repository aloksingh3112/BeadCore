import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';




@Component({
  selector:'app-signup',
  templateUrl:'./signup.component.html',
  styleUrls:['./signup.component.scss']
})
export class SignupComponent{
  message;
  constructor(private authService: AuthService,private router:Router){

  }

  signUp(form: NgForm){
    this.message= null;
    this.authService.signup(form.value)
      .subscribe(
        data=>{
          this.message=data.message;
          form.reset();
          if(data.status==200){
            this.router.navigateByUrl('/login');
          }
        },
        err=>{}
      )

  }
}
