import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  public resultado: number = 0;
  public numero1: number = 0;
  public numero2: number = 0;
  public operacao: string = '+';

  calcular():string {
  //   switch(this.operacao)
  //   {
  //     case '+':
  //       calculo=this.numero1 + this.numero2;
  //       break;
  //       case '-':
  //       calculo=this.numero1 - this.numero2;
  //       break;
  //       case '*':
  //       calculo=this.numero1 * this.numero2;
  //       break;
  //       case '/':
  //       calculo=this.numero1 / this.numero2;
  //       break;
  //   }

    return '0';
  }

}

// "styles": [
//               "src/styles.css",
//               "node_modules/bootstrap/dist/css/bootstrap.min.css"
//             ],
//             "scripts": [
//               "node_modules/bootstrap/dist/js/bundle.min.js"
//             ]
