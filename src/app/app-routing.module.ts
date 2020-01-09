import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToursComponent } from './tours/tours.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path : 'home',
    component: ToursComponent,
    canActivate : [
      AuthGuard
    ]
  },
  {
    path : 'login',
    component: LoginComponent,
  },
  {
    path : '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
