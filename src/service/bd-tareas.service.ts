import { Injectable } from "@angular/core";
import { Tarea } from "../model/tarea";
import { ListaTareas } from "../model/listaTareas";
import { HttpClient } from "@angular/common/http";
import { Tesista } from "../model/tesista";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BdTareasService {
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.baseUrl + "/findallTarea");
  }
  getTareasFiltradas(matricula:string): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.baseUrl + "/filtrarTareas/"+matricula);
  }

  createTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.baseUrl + "/addTareaRequest", tarea);
  }

  deleteTarea(id: number): Observable<Tarea> {
    return this.http.delete<Tarea>(this.baseUrl + "/deleteTarea/" + id);
  }
}
