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

    @Input() veiculo_data: VeiculoData = {
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
        error: (erro: any) => {
          console.log(erro.message);
        },
        next: (vdata: VeiculoData) => {
          this.veiculo_data = vdata
        }
      })


    }

}
