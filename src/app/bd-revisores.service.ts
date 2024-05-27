import { Injectable } from "@angular/core";
import { Revisor } from "../model/revisor";
import { ListaRevisores } from "../model/listaRevisores";
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
}
