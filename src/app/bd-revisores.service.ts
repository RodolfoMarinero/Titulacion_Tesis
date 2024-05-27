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

  setRevisores(revisores: Revisor[]) {
    localStorage.setItem("revisores", JSON.stringify(revisores));
  }
}
