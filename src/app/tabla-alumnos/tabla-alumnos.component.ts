import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { OnChanges, SimpleChanges } from "@angular/core";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { Tesista } from "../../model/tesista";
//import { ListaTesistas } from "../../model/listaTesistas";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { CommonModule } from "@angular/common";
import { SharedDataService } from "../../service/shared-data.service";
import { BDChatService } from "../../service/bd-chat.service";
import { TablaDirectoresComponent } from "../tabla-directores/tabla-directores.component";

import { TablaJefesComponent } from "../tabla-jefes/tabla-jefes.component";
import { ListaRevisores } from "../../model/listaRevisores";
import { ListaTesistas } from "../../model/listaTesistas";
import { BDRevisoresService } from "../../service/bd-revisores.service";

@Component({
  selector: "app-tabla-alumnos",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TablaDirectoresComponent,
    TablaJefesComponent,
  ],
  templateUrl: "./tabla-alumnos.component.html",
  styleUrls: ["./tabla-alumnos.component.css"],
})
export class TablaAlumnosComponent implements OnChanges, OnInit {
  public lista: ListaTesistas = new ListaTesistas();
  public listaFiltrada: ListaTesistas = new ListaTesistas();

  public tesistaMat: string = "";
  public isModalActive: boolean = false;
  public listaRevisores: ListaRevisores = new ListaRevisores();
  public mat_Rev1: string = "";
  public mat_Rev2: string = "";
  @Input() revisorMatricula!: string;
  @Input() carrera!: string;
  @Input() mostrarNotificaciones: boolean | null = null;
  @Input() directorTesis: string = "";
  @Input() filtro!: string;

  constructor(
    private router: Router,
    private service: BdTesistasService,
    private serviceR: BDRevisoresService,
    private sharedDataService: SharedDataService,
    private chatService: BDChatService
  ) {
    //this.aplicarFiltro();
  }

  ngOnInit() {
    this.obtenerTesistas();
    this.obtenerRevisores();
    /**/
    

    console.log("Listaaaaaaaaaaa de tesistas:", this.lista);
    //console.log("Listaaaaaaaaaaa de revisores:", this.listaRevisores);
    //alert("Listaaaaaaaaaaa de tesistas:"+this.lista);
    //alert("Listaaaaaaaaaaa de revisores:"+this.listaRevisores);

    //alert(this.carrera+" "+this.filtro);
  }
  obtenerRevisores(){
    this.serviceR.getUsers().subscribe((data) => {
      this.listaRevisores.revisores = data;
    });
  }
  obtenerTesistas() {
  this.service.getUsers().subscribe((data) => {
    this.lista.tesistas = data;
    this.aplicarFiltro();

  });
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
        alert("entra" + this.filtro);
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
  guardarMatriculaTesistaRevisor(tesistaM: string) {
    console.log("Guardar matrícula de tesista para revisor:", tesistaM);
    this.tesistaMat = tesistaM;
    this.isModalActive = true;
    //console.log("Modal Active:", this.isModalActive);
  }

  matRev1(event: any) {
    alert((this.mat_Rev1 = event.target?.value));
  }
  matRev2(event: any) {
    this.mat_Rev2 = event.target?.value;
  }
  asignarRev() {
    let nuevoTes: Tesista = this.lista.getTesistaByMatricula(this.tesistaMat);
    nuevoTes.revisor1 = this.mat_Rev1;
    nuevoTes.revisor2 = this.mat_Rev2;
    //alert(this.mat_Rev1+"  "+this.mat_Rev2);
    this.service.createTesista(nuevoTes).subscribe((data) => {
      alert("Revisores Asignados");
    });
    this.isModalActive = false;
  }

  close() {
    this.isModalActive = false;
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
        tesista.revisor1 === this.revisorMatricula ||
        tesista.revisor2 === this.revisorMatricula
      ) {
        this.listaFiltrada.agregar(tesista);

        console.log("Lista filtrada Revisores:  " + this.listaFiltrada);
      }
    }
  }

  filtrarTesistasPorCarrera() {
    this.listaFiltrada = new ListaTesistas();
    alert("filtrando " + this.carrera);
    for (let tesista of this.lista.tesistas) {
      alert("Carrera: " + tesista.nombre);
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
  trackByRevisor(index: number, revisor: any) {
    return revisor.matricula;
  }
}
