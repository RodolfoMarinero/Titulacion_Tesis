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
  
  getUsers(): Observable<Tesista[]>{
    return this.http.get<Tesista[]>(this.baseUrl + "/findallTesista");
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
