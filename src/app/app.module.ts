import { AppIntercepters } from './app.interceptor';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AppIntercepters,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
