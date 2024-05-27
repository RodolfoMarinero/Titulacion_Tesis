import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
  FormsModule,
} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Tesista } from '../../model/tesista';
import { ListaTesistas } from '../../model/listaTesistas';
import { BdTesistasService } from '../bd-tesistas.service';
import { CommonModule } from '@angular/common';
import { Revisor } from '../../model/revisor';
import { ListaRevisores } from '../../model/listaRevisores';
import { ListaTareas } from '../../model/listaTareas';
import { Tarea } from '../../model/tarea';
@Component({
  selector: "app-tabla-alumnos",
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, FormsModule, CommonModule],
  templateUrl: "./tabla-alumnos.component.html",
  styleUrl: "./tabla-alumnos.component.css",
})
export class TablaAlumnosComponent {
  public lista: ListaTesistas = new ListaTesistas();
  @Output() flag: EventEmitter<boolean> = new EventEmitter<boolean>();
  //@Output() idDet: EventEmitter<number> = new EventEmitter();
  constructor(private router: Router, private service: BdTesistasService) {
    //this.cargarLocal();
    this.lista = service.getTesistas();
  }
  /*cargarLocal() {
    let tesistas: ListaTesistas = new ListaTesistas();
    let revisorA: ListaRevisores = new ListaRevisores();
    let revisorB: ListaRevisores = new ListaRevisores();
    let revisorC: ListaRevisores = new ListaRevisores();
    let revisorD: ListaRevisores = new ListaRevisores();
    let revisorE: ListaRevisores = new ListaRevisores();
    let tareas: ListaTareas = new ListaTareas();
    tareas.agregar(new Tarea(1, "a", "a", new Date("2024-05-27")));
    // Agregar revisores a las listas de revisores
   // revisorA.agregar(new Revisor("1", "Q", "W", "E", "R", tesistas));
    //revisorB.agregar(new Revisor("2", "Y", "F", "E", "R", tesistas));
    //revisorC.agregar(new Revisor("3", "T", "D", "E", "R", tesistas));
   // revisorD.agregar(new Revisor("4", "R", "A", "E", "R", tesistas));
    //revisorE.agregar(new Revisor("5", "E", "E", "E", "R", tesistas));

    // Agregar tesistas a la lista de tesistas
    tesistas.agregar(new Tesista("1", "A", "A", "A", "A", "A", "A","A","A",true, "222", "4444", tareas));
   // tesistas.agregar(new Tesista("2", "B", "B", "B", true, revisorB, tareas));
    //tesistas.agregar(new Tesista("3", "C", "C", "C", true, revisorC, tareas));
    //tesistas.agregar(new Tesista("4", "D", "D", "D", true, revisorD, tareas));
    //tesistas.agregar(new Tesista("5", "E", "E", "E", true, revisorE, tareas));

    // Guardar la lista de tesistas en el servicio
    this.service.setTesistas(tesistas);
  }*/
  //public agregar() {
  //const id = parseInt(this.frmLista.get('id')?.value);
  //const name = this.frmLista.get('name')?.value;
  //this.listaUsers.agregar(new Tesista(id, name));
  //}

  //public eliminar(i: number): void {
  //this.listaUsers.remove(i);
  //}
  //onSubmit() {
  //this.agregar();
  //}

  navigateToProgreso(tesistaMatricula: string) {
    this.router.navigate(["/progreso", tesistaMatricula]);
  }
  navigateToRevisarTesis(id: string) {
    this.router.navigate(["/revisarTesis", id]);
  }
}
