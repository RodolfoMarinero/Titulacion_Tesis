import { Injectable } from "@angular/core";
import { Jefatura } from "../model/jefatura";
import { ListaJefaturas } from "../model/listaJefaturas";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class BDJefaturaService {
  private baseUrl = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Jefatura[]> {
    return this.http.get<Jefatura[]>(this.baseUrl + "/findAllJefaturas");
  }
  getJefaturaById(id: string): Observable<Jefatura> { 
    return this.http.get<Jefatura>(this.baseUrl + "/findJefatura/" + id);
  }
}
