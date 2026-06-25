import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseVeiculos } from '../models/veiculos';
import { VeiculoData } from '../models/veiculo_data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly API = "http://localhost:3001";

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<ApiResponseVeiculos>{
    return this.http.get<ApiResponseVeiculos>(`${this.API}/vehicles`);
  }

  getVinInfo(vin: string):Observable<VeiculoData>{
    return this.http.post<VeiculoData>(`${this.API}/vehicleData`,{vin})
  }

}
