import { Injectable } from "@angular/core";
import { Tesista } from "../model/tesista";
//mport { ListaTesistas } from "../model/listaTesistas";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BdTesistasService {
  private baseUrl='http://localhost:8080';
  constructor(private http:HttpClient) {}
    /*getTesistas(): ListaTesistas {
    const tesistasString = localStorage.getItem("tesistas");
    const listaTesistas = new ListaTesistas(); // Crear una instancia de ListaTesistas
    // Si no hay tesistas, retorna la lista vacía
    if (!tesistasString) {
      return listaTesistas;
    }
    try {
      const tesistasArray = JSON.parse(tesistasString);
      tesistasArray.forEach((tesista: Tesista) => {
        listaTesistas.agregar(tesista);
      });
      return listaTesistas;
    } catch (error) {
      console.error("Error al parsear tesistas del localStorage", error);
      return listaTesistas;
    }
  }
  setTesistas(tesistas: ListaTesistas) {
    const array = tesistas.getTesistas();
    localStorage.setItem("tesistas", JSON.stringify(array));
  }
  agregarTesista(nuevoTesista: Tesista) {
    const listaTesistas = this.getTesistas();
    listaTesistas.agregar(nuevoTesista);
    this.setTesistas(listaTesistas);
  }*/
  getUsers(): Observable<Tesista[]>{
    return this.http.get<Tesista[]>(this.baseUrl+"/findallTesista");
  }
  createTesista(tesista: Tesista): Observable<Tesista>{
    return this.http.post<Tesista>(this.baseUrl + "/addTesistaRequest",tesista);
  }

  deleteTesista(matricula: string): Observable<Tesista> {
    return this.http.delete<Tesista>(
      this.baseUrl + "/deleteTesista/"+matricula
    );
  }
}
