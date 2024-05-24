import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class BdTesistasService {
  constructor() {}
  getTesistas(): any[] {
    const tesistasString = localStorage.getItem("tesistas");
    // Si no hay tesistas, retorna un array vacío
    if (!tesistasString) {
      return [];
    }

    try {
      return JSON.parse(tesistasString);
    } catch (error) {
      console.error("Error al parsear tesistas del localStorage", error);
      return [];
    }
  }
}
