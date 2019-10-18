import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: Usuario = {
    email: '',
    password: ''
  };
  aceptado = 'No';

  onAceptar(usuario: Usuario) {
    this.aceptado = 'SI';
    this.usuario = usuario;
  }
}
