import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { Usuario } from '../../../../login';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

    loginForm: Usuario = {
        user: '',
        senha:''
    }

    constructor(
      private service: LoginService
    ) { }

    login(){
        console.log(this.loginForm.user);
        console.log(this.loginForm.senha);
        const nome = this.loginForm.user;
        const senha = this.loginForm.senha;
        if(!nome || !senha) {
          alert("Campo obrigatório não preenchido!");
          return;
        }
        this.service.login(nome,senha).subscribe((resp) => {
          console.log(resp)
        });
    }
}
