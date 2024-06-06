import { Injectable } from "@angular/core";
import { Director } from "../model/director";
import { ListaDirectores } from "../model/listaDirectores";

@Injectable({
  providedIn: "root",
})
export class BDDirectoresService {
  constructor() {}

  getDirectores(): ListaDirectores {
    const directoresString = localStorage.getItem("directores");
    const listaDirectores = new ListaDirectores();
    if (!directoresString) {
      return listaDirectores;
    }
    try {
      const directoresArray = JSON.parse(directoresString);
      directoresArray.forEach((director: Director) => {
        listaDirectores.agregar(director);
      });
      return listaDirectores;
    } catch (error) {
      console.error("Error al parsear directores del localStorage", error);
      return listaDirectores;
    }
  }

  setDirectores(directores: ListaDirectores) {
    const array = directores.getDirectores();
    localStorage.setItem("directores", JSON.stringify(array));
  }

  agregarDirector(nuevoDirector: Director) {
    const listaDirectores = this.getDirectores();
    listaDirectores.agregar(nuevoDirector);
    this.setDirectores(listaDirectores);
  }
}
