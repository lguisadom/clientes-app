import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Clientes[];
  private grupos: Grupo[];

  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: "Sin definir"
      },
      {
        id: 1,
        nombre: "Activos"
      },
      {
        id: 2,
        nombre: "Inactivos"
      },
      {
        id: 3,
        nombre: "Deudores"
      }
    ];
  }

  getGrupos(): Grupo[] {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 0
    }
  }
}
