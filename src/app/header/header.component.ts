import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';


@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent{
  constructor(private authService: AuthService,private router:Router){}

  logout(){
     this.authService.logout()
     .subscribe(
       data=>{
         localStorage.removeItem('token');
         this.router.navigateByUrl('/login');

       },
       err=>console.log(err)
     );
  }
}
