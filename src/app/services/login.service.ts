import { Usuario } from './../../../login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = "http://localhost:3001";

  constructor(private http: HttpClient) { }

  login(user: string, senha: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API}/login`,{ user, senha });
  }
}

