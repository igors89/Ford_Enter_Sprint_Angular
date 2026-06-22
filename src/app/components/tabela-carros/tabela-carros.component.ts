import { Component } from '@angular/core';
import { VeiculoData } from '../../models/veiculo_data';

@Component({
  selector: 'app-tabela-carros',
  imports: [],
  templateUrl: './tabela-carros.component.html',
  styleUrl: './tabela-carros.component.css'
})
export class TabelaCarrosComponent {

    public veiculo_data: VeiculoData = {
        id:-1,
        odometro:0,
        nivelCombustivel:0,
        lat: 0,
        long: 0,
        status: ''
    }

}
