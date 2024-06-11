
import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { Alumno } from '../../model/alumno';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent implements OnInit{

  public alumnos: Alumno[] | undefined;
  
  constructor(private alumnoService: AlumnoService){}

  ngOnInit():void{
    this.alumnoService.getUsers().subscribe(data => {
      this.alumnos=data;
    });
  }
  crearAlumno() {
    let alumno: Alumno = new Alumno("1923", "Rodo", "Marinero");
    this.alumnoService.createTesista(alumno).subscribe(data => { console.log("AlumnoCreado") });
  }
}
