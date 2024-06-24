import { Injectable } from "@angular/core";
import { Revisor } from "../model/revisor";
import { ListaRevisores } from "../model/listaRevisores";
import { ListaTesistas } from "../model/listaTesistas";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class BDRevisoresService {
  private baseUrl = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  /*getRevisores(): ListaRevisores {
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
  getUsers(): Observable<Revisor[]> {
    return this.http.get<Revisor[]>(this.baseUrl);
  }*/

  getUsers(): Observable<Revisor[]>{
    return this.http.get<Revisor[]>(this.baseUrl+"/findAllRevisor");
  }
  createRevisor(revisor: Revisor): Observable<Revisor>{
    return this.http.post<Revisor>(this.baseUrl + "/addRevisorRequest",revisor);
  }

  deleteRevisor(matricula: string): Observable<Revisor> {
    return this.http.delete<Revisor>(
      this.baseUrl + "/deleteRevisor/"+matricula
    );
  }
}
