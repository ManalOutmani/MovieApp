import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthServiceService} from "./auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private AuthService :AuthServiceService ,private router:Router)
  { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean  {
    if (this.AuthService.isAuthentified()){
      return true;
    }
    else{
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
