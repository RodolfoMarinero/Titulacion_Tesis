import { Injectable } from "@angular/core";
import { Jefatura } from "../model/jefatura";
import { ListaJefaturas } from "../model/listaJefaturas";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class BDJefaturaService {
  private baseUrl = "http://localhost:8080/jefes";
  constructor(private http: HttpClient) {}

  getJefaturas(): ListaJefaturas {
    const jefaturasString = localStorage.getItem("jefaturas");
    const listaJefaturas = new ListaJefaturas();
    if (!jefaturasString) {
      return listaJefaturas;
    }
    try {
      const jefaturasArray = JSON.parse(jefaturasString);
      jefaturasArray.forEach((jefatura: Jefatura) => {
        listaJefaturas.agregar(jefatura);
      });
      return listaJefaturas;
    } catch (error) {
      console.error("Error al parsear jefaturas del localStorage", error);
      return listaJefaturas;
    }
  }

  setJefaturas(jefaturas: ListaJefaturas) {
    const array = jefaturas.getJefaturas();
    localStorage.setItem("jefaturas", JSON.stringify(array));
  }

  agregarJefatura(nuevaJefatura: Jefatura) {
    const listaJefaturas = this.getJefaturas();
    listaJefaturas.agregar(nuevaJefatura);
    this.setJefaturas(listaJefaturas);
  }
  getUsers(): Observable<Jefatura[]> {
    
    return this.http.get<Jefatura[]>(this.baseUrl);
  }
}
