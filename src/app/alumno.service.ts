import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseUrl='http://localhost:8080/alumnos';

  constructor(private http:HttpClient) {

  }

  getUsers(): Observable<Alumno[]>{
    alert("obteniendo datos");
    return this.http.get<Alumno[]>(this.baseUrl);
  }
}
