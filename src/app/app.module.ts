import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { AEspacioPipe } from './shared/a-espacio.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleAutosComponent } from './autos/detalle-autos/detalle-autos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    AEspacioPipe,
    EstrellasComponent,
    ClientesComponent,
    DetalleAutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: "autos", component: ListaAutosComponent },
      { path: "autos/:id", component: DetalleAutosComponent },
      { path: "inicio", component: InicioComponent },
      { path: "clientes", component: ClientesComponent },
      { path: "inicio", component: ClientesComponent },
      { path: "", redirectTo: "inicio", pathMatch: "full" },
      { path: "**", redirectTo: "inicio", pathMatch: "full" },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
