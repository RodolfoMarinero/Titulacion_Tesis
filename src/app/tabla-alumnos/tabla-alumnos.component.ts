import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Tesista } from '../../model/tesista';
import { ListaTesistas } from '../../model/listaTesistas';
import { BdTesistasService } from '../bd-tesistas.service';
import { HeaderRevisionComponent } from '../header-revision/header-revision.component';
@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,HeaderRevisionComponent],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css',
})
export class TablaAlumnosComponent {
  public listaUsers: ListaTesistas = new ListaTesistas();
  @Output() flag: EventEmitter<boolean> = new EventEmitter<boolean>();
  //@Output() idDet: EventEmitter<number> = new EventEmitter();
  constructor(public service:BdTesistasService) {
   // this.listaUsers=service.getTesistas();
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

  public verDetalle(id: number) {
    this.flag.emit(true); // Cambia el valor que deseas emitir aquí
  }
}
