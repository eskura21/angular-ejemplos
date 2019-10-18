import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() aceptar = new EventEmitter<Usuario>();
  @Output() cancelar = new EventEmitter();

  usuario = {
    email: 'email@email.net',
    password: 'supersecreta'
  };

  onAceptar() {
    this.aceptar.emit(this.usuario);
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
