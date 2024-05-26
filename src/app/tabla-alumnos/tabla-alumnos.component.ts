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
    this.cargarLocal();
    this.lista = service.getTesistas();
  }
  cargarLocal() {
    let tesistas: Tesista[] = [];
    tesistas.push(new Tesista(1, "A", "A", "A", true));
    tesistas.push(new Tesista(2, "B", "B", "B", true));
    tesistas.push(new Tesista(3, "C", "C", "C", true));
    tesistas.push(new Tesista(4, "D", "D", "D", true));
    tesistas.push(new Tesista(5, "E", "E", "E", true));
    this.service.setTesistas(tesistas);
  }
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

  navigateToProgreso(id: number) {
    this.router.navigate(["/progreso", id]);
  }
  navigateToRevisarTesis(id: number) {
    this.router.navigate(["/revisarTesis", id]);
  }
}
