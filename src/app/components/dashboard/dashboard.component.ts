import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Veiculos } from '../../models/veiculos';
import { DashboardService } from '../../services/dashboard.service';
import { VeiculoData } from '../../models/veiculo_data';
import { TabelaCarrosComponent } from '../tabela-carros/tabela-carros.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, TabelaCarrosComponent, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  public veiculos: Veiculos[] = [];

  public veiculoSelecionado: Veiculos = {
    id:-1,
    connected:0,
    img:'',
    softwareUpdates:0,
    vehicle:'',
    volumeTotal:0
  }

  public veiculo_data: VeiculoData = {
    odometro:-1,
    nivelCombustivel:-1,
    lat: -1,
    long: -1,
    status: ''
  }

  constructor(private dbservice: DashboardService){}

  ngOnInit(): void {
    this.buscarVeiculos();
  }

  buscarVeiculos():void {
    this.dbservice.getVeiculos().subscribe({
      error: () => {
        console.error("Erro interno! Recarregue a página ou tente novamente mais tarde!");
      },
      next: (veiculos) => {
        this.veiculos = veiculos.vehicles
        this.veiculoSelecionado = this.veiculos[0]
        console.log(this.veiculoSelecionado);
      }
    })
  }

  buscarDados():void{}

}
