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

    login(){
        console.log(this.loginForm.user);
        console.log(this.loginForm.senha);
    }
}
