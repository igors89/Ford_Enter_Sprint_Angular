import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { Usuario } from '../../../../login';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

    loginForm = {
        nome: '',
        senha:''
    }

    constructor(
      private service: LoginService,
      private router: Router
    ) { }

    login(){
        // console.log(this.loginForm.nome);
        // console.log(this.loginForm.senha);
        const nome = this.loginForm.nome;
        const senha = this.loginForm.senha;

        if(!nome || !senha) {
          alert("Campo obrigatório não preenchido!");
          return;
        }
        this.service.login(nome,senha).subscribe({
          error: (err: any) => {
            if(err.status === 401) {
              alert("Usuário ou senha incorretos!")
              return
            }
            if (err.status === 500) {
              alert("Erro interno! Tente novamente mais tarde!")
              return
            }
          },
          next: (res) => {
            this.router.navigate(['home'])
          }
        });
    }
}
