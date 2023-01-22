import { Component } from "@angular/core";

@Component({
  selector: "lista-autos",
  templateUrl: "./lista-autos.component.html"

})
export class ListaAutosComponent {
  tituloListaAutos: string = "Lista de Automóviles";

  arregloAutos: string[] = [""];
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
