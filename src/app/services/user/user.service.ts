import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URlXD } from '../../utils/localUrl';
import { web } from '../../utils/localUrl';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    apiUrl: string = "http://localhost:3000/api"
    token: any = sessionStorage.getItem('token')

  constructor(private http : HttpClient) {}

    getUsers () {
        return this.http.get(`${web}/users`)
    }

    deleteUser (id: string) {
        return this.http.delete(`${web}/deleteUser/${id}`)
    }

    addUser (body: any) {
        return this.http.post(`${web}/addUser`, body)
    }

    updateUser (id :string, body:any) {
        return this.http.put(`${web}/updateUser/${id}`, body)
    }

    getOneUSer (id :string) {
        return this.http.get(`${web}/user/${id}`)
    }

    session(body: any) {
        return this.http.post(`${web}/validacion`, body)
    }
}
