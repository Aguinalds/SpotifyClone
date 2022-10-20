import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AutheticaterGuard implements CanLoad {

  constructor(private router: Router){

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');

    if(!token){
      this.naoAutenticater();
      return false;
    }

    return true;
      
  }

  naoAutenticater(){
    localStorage.clear();
    this.router.navigate(['/login']);
    return false
  }
}
