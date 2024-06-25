import { Injectable } from "@angular/core";
import { Tesista } from "../model/tesista";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tarea } from "../model/tarea";
import { Revisor } from "../model/revisor";
import { Jefatura } from "../model/jefatura";
import { Director } from "../model/director";

@Injectable({
  providedIn: "root",
})
export class BdTesistasService {
  private baseUrl = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Tesista[]> {
    return this.http.get<Tesista[]>(this.baseUrl + "/findallTesista");
  }

  getUsersByCarrera(carrera: string): Observable<Tesista[]> {
    return this.http.get<Tesista[]>(this.baseUrl + "/filtroPorJefe/" + carrera);
  }

  createTesista(tesista: Tesista): Observable<Tesista> {
    return this.http.post<Tesista>(
      this.baseUrl + "/addTesistaRequest",
      tesista
    );
  }

  deleteTesista(matricula: string): Observable<Tesista> {
    return this.http.delete<Tesista>(
      this.baseUrl + "/deleteTesista/" + matricula
    );
  }

  getTesistaByMatricula(matricula: string): Observable<Tesista> {
    return this.http.get<Tesista>(this.baseUrl + "/findTesista/" + matricula);
  }
  getRevisor(matricula: string): Observable<Revisor> {
    return this.http.get<Revisor>(
      this.baseUrl + "/getRevisor/" + matricula
    );
  }
  getJefatura(carrera: string): Observable<Jefatura> {
    return this.http.get<Jefatura>(this.baseUrl + "/getJefatura/" + carrera);
  }
  getDirector(id: string): Observable<Director> {
    return this.http.get<Director>(this.baseUrl + "/getDirector/" + id);
  }
  getCoDirector(id: string): Observable<Director>{
    return this.http.get<Director>(this.baseUrl + "/getDirector/" + id);
  }
}
  