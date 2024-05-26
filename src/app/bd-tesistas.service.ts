import { Injectable } from "@angular/core";
import { Tesista } from "../model/tesista";
import { ListaTesistas } from "../model/listaTesistas";

@Injectable({
  providedIn: "root",
})
export class BdTesistasService {
  constructor() {}
  getTesistas(): ListaTesistas {
    const tesistasString = localStorage.getItem("tesistas");
    const listaTesistas = new ListaTesistas(); // Crear una instancia de ListaTesistas
    // Si no hay tesistas, retorna la lista vacía
    if (!tesistasString) {
      return listaTesistas;
    }
    try {
      const tesistasArray = JSON.parse(tesistasString);
      // Agregar los tesistas al objeto ListaTesistas
      tesistasArray.forEach((tesista: Tesista) => {
        listaTesistas.agregar(tesista);
      });
      return listaTesistas;
    } catch (error) {
      console.error("Error al parsear tesistas del localStorage", error);
      return listaTesistas;
    }
  }
  setTesistas(tesistas: Tesista[]) {
    localStorage.setItem("tesistas", JSON.stringify(tesistas));
  }
}
