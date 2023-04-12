import { Injectable, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutosService } from 'src/app/shared/autos.service';
import { Auto } from 'src/app/datos/auto';

@Component({
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})

@Injectable({
  providedIn: "root"
})

export class DetalleAutosComponent implements OnInit {

  tituloPagina = "Detalle de autos";
  arregloAutos: string[] = [""];
  filteredArrayAutos: Auto[] = [];
  auto!: Auto;

  imageWidth = 450;
  imageHeight = 300;
  imageMargin = 3;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _autosService: AutosService) {}

  ngOnInit():void {
    let id = Number(this._activatedRoute.snapshot.paramMap.get("id"));
    this.auto = this._autosService.obtenAuto(id);
    this.tituloPagina += ": " + id;
  }

  onBack(): void {
    this._router.navigate([ '/autos' ]);
  }
  comprar(): void {
    alert("En construccion... Regresarás a la Lista de Autos");
    this._router.navigate( ["/autos"]);
  }
}

