import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Auto } from 'src/app/datos/auto'
import { AutosService } from "src/app/shared/autos.service";

@Component({
  selector: "lista-autos",
  templateUrl: "./lista-autos.component.html",
  styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent implements OnInit {

  faStar = faStar;

  tituloListaAutos: string = "Lista de Automóviles";
  arregloAutos: string[] = [""];
  filteredArrayAutos: Auto[] = [];

  arrayAutos: Auto[] = [];
  showImage: boolean = false;
  imageWidth = 200;
  imageMargin = 3;

  constructor(private _autosService: AutosService) {}

  private _filter: string = "";
  get filter():string {
    return this._filter;
  }
  set filter(filterBy: string) {
    filterBy = filterBy.toLowerCase();
    this.filteredArrayAutos = this.arrayAutos.filter(
      (auto: Auto) => auto.marca.toLocaleLowerCase().includes(filterBy)
    )
  }

  ngOnInit(): void {
    this.arrayAutos = this._autosService.obtenListaAutos();
    this.filteredArrayAutos = this.arrayAutos;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onClickCalificacion(mensaje: string): void {
    alert("Dieron click en la calificación: " + mensaje)
  }
}
