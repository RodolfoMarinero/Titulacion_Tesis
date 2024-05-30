import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  public listaFiltrada: ListaTesistas = new ListaTesistas();
  @Input() revisorMatricula: string = '';
  @Input() carrera: string = '';
  @Input() mostrarNotificaciones: boolean | null = null;
  @Input() directorTesis: string = '';
  @Input() filtro: string = '';

  constructor(
    private router: Router,
    private service: BdTesistasService,
    private sharedDataService: SharedDataService
  ) {
     this.cargarLocal();
    this.lista = service.getTesistas();
    this.listaFiltrada = this.lista;
    console.log("Lista de tesistas:", this.lista);
  }

  ngOnInit() {
    this.aplicarFiltro();
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
      "password456",
      true,
      "111111",
      "654321"
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

  aplicarFiltro() {
    switch (this.filtro) {
      case 'revisor':
        this.filtrarTesistasPorRevisor();
        break;
      case 'carrera':
        this.filtrarTesistasPorCarrera();
        break;
      case 'notificaciones':
        this.filtrarTesistasPorNotificaciones();
        break;
      case 'director':
        this.filtrarTesistasPorDirector();
        break;
      default:
        this.listaFiltrada = this.lista;
    }
  }
  navigateToRevisarTesis(tesistaMatricula: string) {
    this.sharedDataService.setData('tesistaMatricula', tesistaMatricula);
    //this.router.navigate(["/"]);
  }

  filtrarTesistasPorRevisor() {
    this.listaFiltrada = new ListaTesistas();
    for (let tesista of this.lista.getTesistas()) {
      if (tesista.revisor1 === this.revisorMatricula || tesista.revisor2 === this.revisorMatricula) {
        this.listaFiltrada.agregar(tesista);
      }
    }
  }

  filtrarTesistasPorCarrera() {
    this.listaFiltrada = new ListaTesistas();
    for (let tesista of this.lista.getTesistas()) {
      if (tesista.carrera === this.carrera) {
        this.listaFiltrada.agregar(tesista);
      }
    }
  }

  filtrarTesistasPorNotificaciones() {
    this.listaFiltrada = new ListaTesistas();
    for (let tesista of this.lista.getTesistas()) {
      if (tesista.notificacion === this.mostrarNotificaciones) {
        this.listaFiltrada.agregar(tesista);
      }
    }
  }

  filtrarTesistasPorDirector() {
    this.listaFiltrada = new ListaTesistas();
    for (let tesista of this.lista.getTesistas()) {
      if (tesista.directorTesis === this.directorTesis) {
        this.listaFiltrada.agregar(tesista);
      }
    }
  }
}
