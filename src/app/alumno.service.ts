import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: "root",
})
export class AlumnoService {
  private baseURL = "http://localhost:8080";
  constructor(private http: HttpClient) {}
  getUsers(): Observable<Alumno[]> {
   
    return this.http.get<Alumno[]>(this.baseURL+"/findall");
  }
  createTesista(tesista: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.baseURL + "/addTesistaRequest", tesista);
  }
}
