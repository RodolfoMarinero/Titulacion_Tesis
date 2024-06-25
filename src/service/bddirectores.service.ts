import { Injectable } from "@angular/core";
import { Director } from "../model/director";
import { ListaDirectores } from "../model/listaDirectores";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BDDirectoresService {
  private baseUrl = "http://localhost:8080/directores";
  constructor(private http: HttpClient) {}

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
  getUsers(): Observable<Director[]> {
    return this.http.get<Director[]>(this.baseUrl);
  }
  getDirectorById(id: string): Observable<Director> {
    return this.http.get<Director>(this.baseUrl + "/findDirector/" + id);
  }
}
