import { Injectable } from "@angular/core";
import { Revisor } from "../model/revisor";
@Injectable({
  providedIn: "root",
})
export class BDRevisoresService {
  constructor() {}

  getRevisores(): Revisor[] {
    const revisoresString = localStorage.getItem("revisores");
    if (!revisoresString) {
      return [];
    }
    try {
      return JSON.parse(revisoresString) as Revisor[];
    } catch (error) {
      console.error("Error al parsear revisores del localStorage", error);
      return [];
    }
  }

  setRevisores(revisores: Revisor[]) {
    localStorage.setItem("revisores", JSON.stringify(revisores));
  }
}
