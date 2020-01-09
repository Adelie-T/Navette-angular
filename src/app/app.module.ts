import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import {HttpClientModule} from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/ui/material/material.module';
import { ToursComponent } from './tours/tours.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    ReactiveFormsModule,
    MomentModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

