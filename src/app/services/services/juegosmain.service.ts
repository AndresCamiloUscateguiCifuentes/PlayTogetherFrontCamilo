import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URlXD } from '../../utils/localUrl';
import { web } from '../../utils/localUrl';

@Injectable({
  providedIn: 'root'
})
export class JuegosmainService {

apiUrl = "http://localhost:3000/api"
token = sessionStorage.getItem('token')

  constructor(private http: HttpClient) { }


getFavoriteGames () {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.get (`${web}/games`, {headers})
  }

deleteGame (id: string) {
    return this.http.delete(`${web}/deletegame/${id}`)
}

addGame (body: any) {
    return this.http.post(`${web}/addgame`, body)
}

updateGame (id :string, body:any) {
    return this.http.put(`${web}/updategame/${id}`, body)
}

getGame (id :string) {
    return this.http.get(`${web}/game/${id}`)
}

searchGame (name: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    return this.http.get (`${web}/games/${name}`, {headers})
}
}
