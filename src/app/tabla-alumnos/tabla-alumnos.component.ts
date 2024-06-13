import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { Tesista } from "../../model/tesista";
import { ListaTesistas } from "../../model/listaTesistas";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { CommonModule } from "@angular/common";
import { SharedDataService } from "../../service/shared-data.service";
import { BDChatService } from "../../service/bd-chat.service";
import { TablaDirectoresComponent } from "../tabla-directores/tabla-directores.component";
import { TablaJefesComponent } from '../tabla-jefes/tabla-jefes.component';

@Component({
  selector: "app-tabla-alumnos",
  standalone: true,
  imports: [CommonModule, RouterModule, TablaDirectoresComponent,TablaJefesComponent],
  templateUrl: "./tabla-alumnos.component.html",
  styleUrls: ["./tabla-alumnos.component.css"],
})
export class TablaAlumnosComponent implements OnChanges,OnInit {
  public lista: ListaTesistas = new ListaTesistas();
  public listaFiltrada: ListaTesistas = new ListaTesistas();
  @Input() revisorMatricula!: string;
  @Input() carrera: string = "";
  @Input() mostrarNotificaciones: boolean | null = null;
  @Input() directorTesis: string = "";
  @Input() filtro: string = "tesista";

  constructor(
    private router: Router,
    private service: BdTesistasService,
    private sharedDataService: SharedDataService,
    private chatService: BDChatService
  ) {
     this.aplicarFiltro();
  }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      this.lista.tesistas = data;
    });
    this.listaFiltrada = this.lista;
    console.log("Lista de tesistas:", this.lista);
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["filtro"]) {
      this.aplicarFiltro();

    }
  }


  aplicarFiltro() {
    
    switch (this.filtro) {
      case "revisor":
        alert("entra");
        this.filtrarTesistasPorRevisor();
        break;
      case "carrera":
        this.filtrarTesistasPorCarrera();
        break;
      case "notificaciones":
        this.filtrarTesistasPorNotificaciones();
        break;
      case "director":
        this.filtrarTesistasPorDirector();
        break;
      default:
        this.listaFiltrada = this.lista;
    }
  }

  navigateToProgreso(tesistaMatricula: string) {
    this.sharedDataService.setData("tesistaMatricula", tesistaMatricula);
    this.router.navigate(["/progreso"]);
  }

  navigateToRevisor(revisorMatricula: string) {
    this.sharedDataService.setData("revisorMatricula", revisorMatricula);
  }
  @Output() tesistaMa = new EventEmitter<string>();

  guardarMatriculaTesista(tesistaM: string) {
    //this.sharedDataService.setData("tesistaM", tesistaM);
    this.tesistaMa.emit(tesistaM);
    
    this.chatService.openModal();
  }

  navigateToDirector(directorMatricula: string) {
    this.sharedDataService.setData("directorMatricula", directorMatricula);
  }

  navigateToJefatura(directorMatricula: string) {
    this.sharedDataService.setData("directorMatricula", directorMatricula);
  }

  filtrarTesistasPorRevisor() {
    this.listaFiltrada = new ListaTesistas();
    for (let tesista of this.lista.getTesistas()) {
      if (
        tesista.getRevisor1() === this.revisorMatricula ||
        tesista.getRevisor2() === this.revisorMatricula
      ) {
        this.listaFiltrada.agregar(tesista);
        
        console.log("Lista filtrada Revisores:  "+this.listaFiltrada);
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
