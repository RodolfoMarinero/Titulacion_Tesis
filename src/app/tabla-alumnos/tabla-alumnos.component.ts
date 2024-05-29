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
   // this.cargarLocal();
    this.lista = service.getTesistas();
    console.log("Lista de tesistas:", this.lista);
  }
  cargarLocal() {
    
    // Crear instancias de Tesista con datos de prueba
    let tesista1 = new Tesista(
      "123456",
      "Juan",
      "Pérez",
      "Ingeniería Informática",
      "Desarrollo de una aplicación web",
      "Dr. Antonio Gómez",
      "juan@example.com",
      "password123",
      true,
      "Lic. María Rodríguez"
    );

    let tesista2 = new Tesista(
      "987654",
      "María",
      "González",
      "Ciencias de la Computación",
      "Inteligencia Artificial",
      "Dr. Roberto Martínez",
      "maria@example.com",
      "password456"
    );

    let tesista3 = new Tesista(
      "456789",
      "Pedro",
      "López",
      "Ingeniería Eléctrica",
      "Diseño de un sistema de control automático",
      "Dr. Alejandro Pérez",
      "pedro@example.com",
      "password789"
    );

    let tesista4 = new Tesista(
      "654321",
      "Ana",
      "Sánchez",
      "Ingeniería Civil",
      "Optimización de estructuras de concreto",
      "Dr. Fernando García",
      "ana@example.com",
      "passwordabc",
      false,
      "Ing. Laura Martínez"
    );

    let tesista5 = new Tesista(
      "135792",
      "Luis",
      "Martínez",
      "Ingeniería Mecánica",
      "Diseño de una máquina automática",
      "Dr. Ricardo Rodríguez",
      "luis@example.com",
      "passwordxyz",

    );

    // Agregar los tesistas a la lista
    this.lista.agregar(tesista1);
    this.lista.agregar(tesista2);
    this.lista.agregar(tesista3);
    this.lista.agregar(tesista4);
    this.lista.agregar(tesista5);

    this.service.setTesistas(this.lista);
  }
 
  navigateToProgreso(tesistaMatricula: string) {
    this.router.navigate(["/progreso", tesistaMatricula]);
  }
  navigateToRevisarTesis(id: string) {
    this.router.navigate(["/detallesTesis", id]);
  }
}
