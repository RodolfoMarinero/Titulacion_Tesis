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


}
