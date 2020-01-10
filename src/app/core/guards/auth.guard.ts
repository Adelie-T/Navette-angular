import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  public constructor (private router: Router, private userService: UserServiceService) { }
   
  public canActivate() : boolean {

    if (!this.userService.isAuthenticated()) {
      this.router.navigate(['login']); //on lui impose d'afficher la page 'login'
      return false
    }

    return true; 
  }
   
   
}
