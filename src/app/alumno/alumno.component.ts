import { Component, OnInit } from "@angular/core";
import { AlumnoService } from "../../service/alumno.service";
import { Alumno } from "../../model/alumno";
import { RouterModule } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-alumno",
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: "./alumno.component.html",
  styleUrl: "./alumno.component.css",
})
export class AlumnoComponent implements OnInit {
  public alumnos: Alumno[] | undefined;
  public form!: FormGroup;
  constructor(private alumnoService: AlumnoService, builder: FormBuilder) {
    this.form = builder.group({
      matricula: [""],
      nombre: [""],
      apellidos: [""],
    });
  }

  ngOnInit(): void {
    this.alumnoService.getUsers().subscribe((data) => {
      this.alumnos = data;
    });
  }
  crearAlumno(alumno: Alumno) {
    this.alumnoService.createAlumno(alumno).subscribe((data) => {
      console.log("AlumnoCreado");
      this.alumnoService.getUsers().subscribe((data) => {
        this.alumnos = data;
      });
    });
  }
  deleteAlumno(matricula: string) {
    this.alumnoService.deleteALumno(matricula).subscribe(() => {
      console.log("Alumno eliminado");
      this.alumnoService.getUsers().subscribe((data) => {
        this.alumnos = data;
      });
    });
  }
  updateAlumno(alumno: Alumno) {
    let matricula = this.form.get("matricula");
    let nombre = this.form.get("nombre");
    let apellidos = this.form.get("apellidos");
    matricula?.setValue(alumno.matricula);
    nombre?.setValue(alumno.nombre);
    apellidos?.setValue(alumno.apellidos);
  }

  submit() {
    let matriculaF = this.form.get("matricula");
    let nombreF = this.form.get("nombre");
    let apellidosF = this.form.get("apellidos");
    let matricula = matriculaF?.value;
    let nombre = nombreF?.value;
    let apellidos = apellidosF?.value;
    let isValidMatricula = this.form.get("matricula")?.valid;
    let isValidNombre = this.form.get("nombre")?.valid;
    let isValidApellidos = this.form.get("apellidos")?.valid;
    let isValidForm = this.form.valid;
    console.log(
      isValidMatricula +
        " " +
        isValidNombre +
        " " +
        isValidApellidos +
        " " +
        isValidForm
    );

    if (isValidForm) {
      this.crearAlumno(new Alumno(matricula, nombre, apellidos));
      
    }
    matriculaF?.setValue(" ");
    nombreF?.setValue(" ");
    apellidosF?.setValue(" ");
  }
}
