import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css',
})
export class TablaAlumnosComponent {
  public listaUsers: ListaTesistas = new ListaTesistas();
  @Output() flag: EventEmitter<boolean> = new EventEmitter<boolean>();
  //@Output() idDet: EventEmitter<number> = new EventEmitter();
  constructor() {}
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
class Tesista {
  public id!: number;
  public nombre: String = '';
  public tesis: string = '';
  public carrera: string = '';
  public notificacion: boolean = false;

  constructor(
    id: number,
    nombre: String,
    tesis: string,
    carrera: string,
    notificaion: boolean
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tesis = tesis;
    this.carrera = carrera;
  }
}

class ListaTesistas {
  public users: Tesista[] = [];

  constructor() {
    this.get();
  }

  //public agregar(user: Tesista) {
  //this.users.push(user);
  //this.save();
  //this.get();
  //}

  //public remove(index: number) {
  //this.users.splice(index, 1);
  //this.save();
  //}

  //public save() {
  //localStorage.setItem('users', JSON.stringify(this.users));
  //}

  public get(): void {
    const userFromLocal = JSON.parse(localStorage.getItem('users') || '[]');
    this.users.splice(0);
    if (Array.isArray(userFromLocal)) {
      this.users = userFromLocal.map(
        (user: any) =>
          new Tesista(
            user.id,
            user.nombre,
            user.tesis,
            user.carrera,
            user.notificacion
          )
      );
    } else {
      console.error('El valor recuperado de localStorage no es un array.');
    }
  }
}
