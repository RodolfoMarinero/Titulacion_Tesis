import { Injectable } from "@angular/core";
import { Director } from "../model/director";
import { ListaDirectores } from "../model/listaDirectores";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BDDirectoresService {
  private baseUrl = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Director[]> {
    return this.http.get<Director[]>(this.baseUrl + "/findAllDirectors");
  }
  getDirectorById(id: string): Observable<Director> {
    return this.http.get<Director>(this.baseUrl + "/findDirector/" + id);
  }
}
