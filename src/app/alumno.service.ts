import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
private baseURL='http://localhost:8080/alumnos'
  constructor(private http: HttpClient) { 
    
  }
  getUsers(): Observable<Alumno[]>{
    alert("obteniendo contenido");
    return this.http.get<Alumno[]>(this.baseURL);
  }
}
