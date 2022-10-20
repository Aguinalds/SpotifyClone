import { Injectable } from '@angular/core';
import { SpotifyConfigiration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUsuario } from '../pages/Interfaces/IUsuario';
import { SpotifyUserParaUsuario } from '../Common/SpotifyHelper';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  spotifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;


  constructor() {
    this.spotifyApi = new Spotify();
  }


  //Iniciando Usuario 
  async iniciarlizarUsuario() {
    if (!!this.usuario)
      return true

    const token = localStorage.getItem('token');

    if (!token) {
      return false
    }

    try {

      this.definirSpotify(token);
      await this.obterSpotifyUsuario()
      return !!this.usuario;

    } catch (ex) {
      return false;
    }


  }

  //Obtendo informações de usuario do Spotify
  async obterSpotifyUsuario() {
    const userInfo = await this.spotifyApi.getMe();
    this.usuario = SpotifyUserParaUsuario(userInfo);
  }



  //Url de Login
  obterUrlLogin() {
    const authEndPoint = `${SpotifyConfigiration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfigiration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfigiration.redirect}&`;
    const scopes = `scope=${SpotifyConfigiration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndPoint + clientId + redirectUrl + scopes + responseType;
  }


  //Obtendo o Token de usuario para o acesso
  obterTokenUrlCallback() {
    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }


  //salvando o token de usuario no LocalStorage
  definirSpotify(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);

  }
}

