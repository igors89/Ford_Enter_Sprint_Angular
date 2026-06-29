import { Component } from '@angular/core';
import { WelcomeComponent } from "../welcome/welcome.component";
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';

@Component({
  selector: 'app-home',
  imports: [CabecalhoComponent,WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
