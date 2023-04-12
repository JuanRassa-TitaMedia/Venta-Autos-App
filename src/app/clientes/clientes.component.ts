import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  tituloPagina: string = "Registro del Cliente";
  cliente = { nombre: "", password: "", telefono: "", email: ""};
  quiereContacto = { false: false, true: true }

  constructor(private _router: Router,) { }

  ngOnInit(): void { }
  goInicio(): void {
    this._router.navigate([ "/inicio"]);
  }
  registra(): void {
    alert("En construccion");
    this._router.navigate( ["/autos"]);
  }
}