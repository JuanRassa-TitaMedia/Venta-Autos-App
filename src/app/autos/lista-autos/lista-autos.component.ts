import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Auto } from 'src/app/datos/auto'

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
    this.arrayAutos = [
      {
        imageUrl: "assets/imagenAutos/McLaren765ltSpider.png",
        marca: "McLaren",
        modelo: "765LT Spider",
        anio: 2020,
        color: "Azul",
        kilometros: 25000,
        precio: 200000000,
        calificacion: 4
      },
      {
        imageUrl: "assets/imagenAutos/McLaren765ltSpider.png",
        marca: "Ferrari",
        modelo: "F-ER23",
        anio: 1990,
        color: "Rojo",
        kilometros: 50000,
        precio: 10000000,
        calificacion: 3
      },
      {
        imageUrl: "assets/imagenAutos/McLaren765ltSpider.png",
        marca: "Honda",
        modelo: "H-223",
        anio: 2020,
        color: "Azul",
        kilometros: 25000,
        precio: 200000000,
        calificacion: 2
      },
      {
        imageUrl: "assets/imagenAutos/McLaren765ltSpider.png",
        marca: "Mercedes",
        modelo: "Hilf-PH432",
        anio: 1990,
        color: "Rojo",
        kilometros: 50000,
        precio: 10000000,
        calificacion: 2
      }
    ]
    this.filteredArrayAutos = this.arrayAutos
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onClickCalificacion(mensaje: string): void {
    alert("Dieron click en la calificación: " + mensaje)
  }
}

/* To do:

  1. Buscar 5 imágenes de autos.
  2. Conseguir datos ficticios:
    -Marca
    -Modelo
    -Año
    -Color
    -Kilómetros
    -Precio
    -Calificación
  3. Copiar fotos al directorio "assets/imagenAutos"

*/
