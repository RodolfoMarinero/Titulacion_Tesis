import { Injectable } from "@angular/core";
import { Revisor } from "../model/revisor";
import { ListaRevisores } from "../model/listaRevisores";
import { ListaTesistas } from "../model/listaTesistas";
@Injectable({
  providedIn: "root",
})
export class BDRevisoresService {
  constructor() {}

  getRevisores(): ListaRevisores {
    const revisoresString = localStorage.getItem("revisores");
    const listaRevisores = new ListaRevisores();
    if (!revisoresString) {
      return listaRevisores;
    }
    try {
      const revisoresArray = JSON.parse(revisoresString);
      revisoresArray.forEach((revisor: Revisor) => {
        listaRevisores.agregar(revisor);
      });
      return listaRevisores;
    } catch (error) {
      console.error("Error al parsear revisores del localStorage", error);
      return listaRevisores;
    }
  }

  setRevisores(revisores: ListaRevisores) {
    const array = revisores.getRevisores();
    localStorage.setItem("revisores", JSON.stringify(array));
  }
  agregarRevisor(nuevoRevisor: Revisor) {
    const listaRevisores = this.getRevisores();
    listaRevisores.agregar(nuevoRevisor);
    this.setRevisores(listaRevisores);
  }
  cargarRevisores() {
    const lista = new ListaRevisores();

    // Crear instancias de revisores
    const revisor1 = new Revisor(
      "matricula1",
      "Nombre1",
      "Apellidos1",
      "Area1",
      "Universidad1",
      new ListaTesistas()
    );
    const revisor2 = new Revisor(
      "matricula2",
      "Nombre2",
      "Apellidos2",
      "Area2",
      "Universidad2",
      new ListaTesistas()
    );
    const revisor3 = new Revisor(
      "matricula3",
      "Nombre3",
      "Apellidos3",
      "Area3",
      "Universidad3",
      new ListaTesistas()
    );
    const revisor4 = new Revisor(
      "matricula4",
      "Nombre4",
      "Apellidos4",
      "Area4",
      "Universidad4",
      new ListaTesistas()
    );
    const revisor5 = new Revisor(
      "matricula5",
      "Nombre5",
      "Apellidos5",
      "Area5",
      "Universidad5",
      new ListaTesistas()
    );

    // Agregar revisores a la lista
    lista.agregar(revisor1);
    lista.agregar(revisor2);
    lista.agregar(revisor3);
    lista.agregar(revisor4);
    lista.agregar(revisor5);

    this.setRevisores(lista);
  }
}
