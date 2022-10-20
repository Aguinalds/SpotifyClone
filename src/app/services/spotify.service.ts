import { Injectable } from '@angular/core';
import { SpotifyConfigiration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  spotifyApi: Spotify.SpotifyWebApiJs = null;


  constructor() { 
    this.spotifyApi = new Spotify();
  }


  obterUrlLogin(){
    const authEndPoint = `${SpotifyConfigiration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfigiration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfigiration.redirect}&`;
    const scopes = `scope=${SpotifyConfigiration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndPoint + clientId + redirectUrl + scopes + responseType;
  }

  obterTokenUrlCallback(){
    if(!window.location.hash)
    return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  definirSpotify(token: string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    
  }
}
