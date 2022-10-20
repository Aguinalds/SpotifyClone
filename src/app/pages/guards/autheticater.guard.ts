import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AutheticaterGuard implements CanLoad {

  constructor(
    private router: Router,
    private spotifyService: SpotifyService){



  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');

    if(!token){
      this.naoAutenticater();
      return false;
    }

    return new Promise(async (res) => {
      const usuarioCriado = await this.spotifyService.iniciarlizarUsuario();
      if(usuarioCriado)
      res(true);
      else
      res(this.naoAutenticater());
    });
      
  }

  naoAutenticater(){
    localStorage.clear();
    this.router.navigate(['/login']);
    return false
  }
}
