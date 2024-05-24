import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class BDRevisoresService {
  constructor() {}
  getRevisores(): any[] {
    const revisoresString = localStorage.getItem("revisores");
    // Si no hay revisores, retorna un array vacío
    if (!revisoresString) {
      return [];
    }
    try {
      return JSON.parse(revisoresString);
    } catch (error) {
      console.error("Error al parsear revisores del localStorage", error);
      return [];
    }
  }
}
