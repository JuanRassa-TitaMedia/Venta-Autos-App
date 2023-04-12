import { Injectable } from "@angular/core";
import { Auto } from 'src/app/datos/auto';

@Injectable({
  providedIn: "root"
})

export class AutosService{


  obtenListaAutos():Auto[] {
    let listaAutos = this._determinaListaAutos();
    return listaAutos;
  }
  private _determinaListaAutos(): Auto[] {
    let listaAutos = [
      {
        id: 1,
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
        id: 2,
        imageUrl: "assets/imagenAutos/ferrari3.jpg",
        marca: "Ferrari",
        modelo: "F-ER23",
        anio: 2015,
        color: "Plateado",
        kilometros: 50000,
        precio: 10000000,
        calificacion: 3
      },
      {
        id: 3,
        imageUrl: "assets/imagenAutos/honda.jpeg",
        marca: "Honda",
        modelo: "H-223",
        anio: 2018,
        color: "Gris",
        kilometros: 25000,
        precio: 200000000,
        calificacion: 5
      },
      {
        id: 4,
        imageUrl: "assets/imagenAutos/mercedes.jpg",
        marca: "Mercedes",
        modelo: "Hilf-PH432",
        anio: 2020,
        color: "Blanco",
        kilometros: 50000,
        precio: 10000000,
        calificacion: 3
      },
      {
        id: 5,
        imageUrl: "assets/imagenAutos/amartin.jpeg",
        marca: "Aston Martin",
        modelo: "PR2",
        anio: 2008,
        color: "Verde",
        kilometros: 80000,
        precio: 32000000,
        calificacion: 4
      }
    ]
    return listaAutos;
  }
  public obtenAuto( id: number ): Auto {
    return this.obtenListaAutos().find( auto => auto.id == id )!;
  }
}
