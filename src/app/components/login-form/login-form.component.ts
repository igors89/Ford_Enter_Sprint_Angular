import { CommonModule } from '@angular/common';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

    loginForm = {
        nome: '',
        senha:''
    }

    errorMessage: string | null = null;

    constructor(
      private service: LoginService,
      private router: Router
    ) { }

    login(): void{
      
        const nome = this.loginForm.nome;
        const senha = this.loginForm.senha;

        if(!nome || !senha) {
          alert("Campo obrigatório não preenchido!");
          return;
        }
        this.service.login(this.loginForm).subscribe({
          error: (err) => {
            this.errorMessage = err.error.message || "Usuário ou senha inválidos";
            console.log(this.errorMessage);            
            return
          },
          next: () => {
            this.router.navigate(['home'])
          }
        });
      }
    }
