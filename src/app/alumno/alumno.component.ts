import { Component, OnInit } from "@angular/core";
import { AlumnoService } from "../alumno.service";
import { Alumno } from "../../model/alumno";

@Component({
  selector: "app-alumno",
  standalone: true,
  imports: [],
  templateUrl: "./alumno.component.html",
  styleUrl: "./alumno.component.css",
})
export class AlumnoComponent implements OnInit {
  public alumnos: Alumno[] | undefined;
  constructor(private alumnoService: AlumnoService) {}
  ngOnInit(): void {
    this.alumnoService.getUsers().subscribe((data) => {
      this.alumnos = data;
    });
  }
}
