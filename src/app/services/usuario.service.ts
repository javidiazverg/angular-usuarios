import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "jdiaz", nombre: 'Javier', apellido: "Diaz", sexo: 'Masc.'},
    {usuario: "mgomez", nombre: 'Martin', apellido: "Gomez", sexo: 'Masc.'},
    {usuario: "ngarcia", nombre: 'Nicolas', apellido: "Garcia", sexo: 'Masc.'},
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez", sexo: 'Masc.'},
    {usuario: "mgomez", nombre: 'Martin', apellido: "Gomez", sexo: 'Masc.'},
    {usuario: "ngarcia", nombre: 'Nicolas', apellido: "Garcia", sexo: 'Masc.'},
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1)
  }

  agregarUsuario(usuario: Usuario) {
     this.listUsuarios.unshift(usuario);
  }

}
