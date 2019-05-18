import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes:Routes= [
  {
    path:'',
    component:SignupComponent
  },
  {
     path:'login',
     component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'**',
    component:SignupComponent
  }
]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RoutingModule{

}
