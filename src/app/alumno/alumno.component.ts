
import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { Alumno } from '../../model/alumno';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent implements OnInit{

  public alumnos: Alumno[] | undefined;
  public form!:FormGroup;

  constructor(private alumnoService: AlumnoService, builder:FormBuilder){
    this.form=builder.group({
      matricula: [''],
      nombre: [''],
      apellidos: [''],
    })
}

  ngOnInit():void{
    this.alumnoService.getUsers().subscribe(data => {
      this.alumnos=data;
    });
  }

  submit(){
    let matricula=this.form.get('matricula')?.value;
    let nombre=this.form.get('nombre')?.value;
    let apellidos=this.form.get('apellidos')?.value;
    let isValidMatricula=this.form.get('matricula')?.valid;
    let isValidNombre=this.form.get('nombre')?.valid;
    let isValidApellidos=this.form.get('apellidos')?.valid;
    let isValidForm=this.form.valid;
    console.log(isValidMatricula+" "+ isValidNombre+" "+ isValidApellidos+ " "+isValidForm);

    if(isValidForm){
      this.crearAlumno(new Alumno(matricula,nombre,apellidos));
    }
    
  }

  eliminar(matricula:String){
    this.alumnoService.deleteAlumno(matricula).subscribe(data=>{
      console.log("Alumno eliminado");
    });
  }

  crearAlumno(alumno:Alumno){
    this.alumnoService.createAlumno(alumno).subscribe(data=>{
      console.log("Alumno creado");
    })
  }
}
