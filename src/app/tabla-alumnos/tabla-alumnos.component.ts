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
    let revisorA:Revisor[]=[];
    let revisorB:Revisor[]=[];
    let revisorC:Revisor[]=[];
    let revisorD:Revisor[]=[];
    let revisorE: Revisor[] = [];
    revisorA.push(new Revisor(1, "Q", "W", "E", "R"));
    revisorB.push(new Revisor(2, "Y", "F", "E", "R"));
    revisorC.push(new Revisor(3, "T", "D", "E", "R"));
    revisorD.push(new Revisor(4, "R", "A", "E", "R"));
    revisorE.push(new Revisor(1, "E", "E", "E", "R"));
    tesistas.push(new Tesista(1, "A", "A", "A", true, revisorA));
    tesistas.push(new Tesista(2, "B", "B", "B", true, revisorB));
    tesistas.push(new Tesista(3, "C", "C", "C", true, revisorC));
    tesistas.push(new Tesista(4, "D", "D", "D", true, revisorD));
    tesistas.push(new Tesista(5, "E", "E", "E", true, revisorE));
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

  navigateToProgreso(tesistaId: number) {
    
    this.router.navigate(["/progreso", tesistaId.toString()]);
  }
  navigateToRevisarTesis(id: number) {
    this.router.navigate(["/revisarTesis", id]);
  }
}
