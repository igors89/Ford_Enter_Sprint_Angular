import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculos } from '../models/veiculos';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly API = "http://localhost:3001";

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<Veiculos[]>{
    return this.http.get<Veiculos[]>(`${this.API}/vehicles`);
  }

  getVinInfo():void{}

}
