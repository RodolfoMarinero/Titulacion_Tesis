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
import { SharedDataService } from "../shared-data.service";

@Component({
  selector: "app-tabla-alumnos",
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, FormsModule, CommonModule],
  templateUrl: "./tabla-alumnos.component.html",
  styleUrl: "./tabla-alumnos.component.css",
})
export class TablaAlumnosComponent {
  public lista: ListaTesistas = new ListaTesistas();
 
  constructor(
    private router: Router,
    private service: BdTesistasService,
    private sharedDataService: SharedDataService
  ) {
     this.cargarLocal();
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
      "111111",
      "654321"
    );

    let tesista2 = new Tesista(
      "987654",
      "María",
      "González",
      "Ciencias de la Computación",
      "Inteligencia Artificial",
      "Dr. Roberto Martínez",
      "maria@example.com",
      "password456",true,"123123","23"
    );

    let tesista3 = new Tesista(
      "456789",
      "Pedro",
      "López",
      "Ingeniería Eléctrica",
      "Diseño de un sistema de control automático",
      "Dr. Alejandro Pérez",
      "pedro@example.com",
      "password789",false,"45","152"
    );


    // Agregar los tesistas a la lista
    this.lista.agregar(tesista1);
    this.lista.agregar(tesista2);
    this.lista.agregar(tesista3);
    
    this.service.setTesistas(this.lista);
  }

  
  navigateToRevisarTesis(tesistaMatricula: string) {
    this.sharedDataService.setData(tesistaMatricula);
    this.router.navigate(["/detallesTesis"]);
  }
}
