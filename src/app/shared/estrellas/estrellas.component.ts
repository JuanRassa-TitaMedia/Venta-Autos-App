import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnInit, OnChanges {
  faStar = faStar
  estrellasCalificacion: any[] = [];

  @Input() calificacion: number = 0;
  @Output() starsClick = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.estrellasCalificacion = [];
    for (let i = 1; i <= this.calificacion; i++) {
      this.estrellasCalificacion.push(1)
    }
  }

  onClick(stars: number): void {
    this.starsClick.emit("Calificacion: " + stars);
  }
}
