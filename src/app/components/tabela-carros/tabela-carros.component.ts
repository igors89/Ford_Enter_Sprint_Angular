import { Component, Input } from '@angular/core';
import { VeiculoData } from '../../models/veiculo_data';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-tabela-carros',
  imports: [],
  templateUrl: './tabela-carros.component.html',
  styleUrl: './tabela-carros.component.css'
})
export class TabelaCarrosComponent {

    veiculo_data: VeiculoData = {
        id:-1,
        odometro:0,
        nivelCombustivel:0,
        lat: 0,
        long: 0,
        status: ''
    }

    constructor(private dshservice: DashboardService){}

    buscarInfo(event: Event){
      const vin = event.target as HTMLInputElement;
      this.dshservice.getVinInfo(vin.value).subscribe({
        error: () => {
          this.veiculo_data.id=-1
          this.veiculo_data.odometro=0
          this.veiculo_data.lat=0
          this.veiculo_data.long=0
          this.veiculo_data.nivelCombustivel=0
          this.veiculo_data.status=''
        },
        next: (vdata: VeiculoData) => {
          this.veiculo_data = vdata
        }
      })


    }

}
