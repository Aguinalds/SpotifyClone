export const environment = {
  production: true
};

export const SpotifyConfigiration = {
  clientId :'c5c7155d0c98496ca4d9fe8f2f046c91',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirect: 'http://localhost:4200/login/',
  scopes : [
    "user-read-currently-playing", // musica tocando agora.
    "user-read-recently-played", // ler musica tocadas recentemente
    "user-read-playback-state", //ler estado do player do usuario
    "user-top-read", // top  artistas e musicas do usuario
    "user-modify-playback-state", //alterar o player do usuario
    "user-library-read", //ler biblioteca dos usuarios
    "playlist-read-private", //ler playlist privadas
    "playlist-read-collaborative" // ler playlist colaborativas
  ]
}