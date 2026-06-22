import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Veiculos } from '../../models/veiculos';
import { DashboardService } from '../../services/dashboard.service';
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
    volumetotal:0
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
        // console.log(this.veiculoSelecionado);
      }
    })
  }

  buscarDados():void{}

  onSelectChange(event: Event){
    const id = parseInt((event.target as HTMLSelectElement).value)
    const veiculo = this.veiculos.find((veiculo) => veiculo.id === id)
    
    if(veiculo) this.veiculoSelecionado = veiculo
    
  }

}
