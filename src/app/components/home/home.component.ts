import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { WelcomeComponent } from "../welcome/welcome.component";

@Component({
  selector: 'app-home',
  imports: [MenuComponent, WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
