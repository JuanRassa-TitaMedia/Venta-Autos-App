import { Component } from "@angular/core";

interface Auto {
  imagenUrl: string,
  marca: string,
  modelo: string,
  anio: number,
  color: string,
  kilometros: number,
  precio: string,
  calificacion: number
}
@Component({
  selector: "lista-autos",
  templateUrl: "./lista-autos.component.html"
})

export class ListaAutosComponent {

  tituloListaAutos: string = "Lista de Automóviles";

  arregloAutos: string[] = [""];
  listaAutos: Auto[] = [];
  muestraImagen: boolean = false;
  filtro: string = "";
  anchoImagen = 120;
  margenImagen = 3;

  ngOnInit(): void {
    this.listaAutos = [
      {
        imagenUrl: "../../../../src/assets/imagenAutos/McLaren765ltSpider.png",
        marca: "McLaren",
        modelo: "765LT Spider",
        anio: 2020,
        color: "Azul",
        kilometros: 25000,
        precio: "200.000.000",
        calificacion: 4
      },
      {
        imagenUrl: "../../../../src/assets/imagenAutos/McLaren765ltSpider.png",
        marca: "Ferrari",
        modelo: "Ari",
        anio: 1990,
        color: "Rojo",
        kilometros: 50000,
        precio: "10.000.000",
        calificacion: 3
      }
    ]
  }

  toggleImage(): void {
    this.muestraImagen = !this.muestraImagen;
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
