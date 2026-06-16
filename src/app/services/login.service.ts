import { Login } from './../../../login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = "http://localhost:3001";

  constructor(private http: HttpClient) { }

  login(user: string, senha: string): Observable<Login[]> {
    return this.http.post<Login[]>(`${this.API}/login`,{ user, senha });
  }
}

