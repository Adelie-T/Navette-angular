import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public constructor(private router: Router) {
    //public truc: UserServiceService;
  }
   
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // if (!truc.isAuthenticated) {
    this.router.navigate(['login']); //on lui impose d'afficher la page 'login'
    // },

      return true
     // truc.isAuthenticated; //on lui interdit la page 'home'
  }
  
}
