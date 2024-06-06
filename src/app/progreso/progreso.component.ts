import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalEnvioComponent } from "../modal-envio/modal-envio.component";
import { ListaTareasComponent } from "../lista-tareas/lista-tareas.component";
import { ChatComponent } from "../chat/chat.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { TaskModalComponent } from "../task-modal/task-modal.component";
import { MenuComponent } from "../menu/menu.component";
import { Tesista } from "../../model/tesista";
import { BdTesistasService } from "../bd-tesistas.service";
import { ListaTesistas } from "../../model/listaTesistas";
import { ActivatedRoute } from "@angular/router";
import { SharedDataService } from "../shared-data.service";
import { Revisor } from "../../model/revisor";
import { BDRevisoresService } from "../bd-revisores.service";
import { ListaRevisores } from "../../model/listaRevisores";

import { NavMenuComponent } from "../nav-menu/nav-menu.component";

import { Director } from "../../model/director";
import { BDDirectoresService } from "../bddirectores.service";
import { ListaDirectores } from "../../model/listaDirectores";
import { Jefatura } from "../../model/jefatura";
import { BDJefaturaService } from "../bdjefatura.service";
import { ListaJefaturas } from "../../model/listaJefaturas";


@Component({
  selector: "app-progreso",
  standalone: true,
  imports: [
    MenuComponent,
    ModalEnvioComponent,
    ListaTareasComponent,
    ChatComponent,
    TaskListComponent,
    TaskModalComponent,
    CommonModule,
    NavMenuComponent
  ],
  templateUrl: "./progreso.component.html",
  styleUrls: ["./progreso.component.css"],
})
export class ProgresoComponent {
  public listaT!: ListaTesistas;
  public listaR!: ListaRevisores;
  public listaD!: ListaDirectores;
  public listaJ!: ListaJefaturas;
  public tesistaMatricula!: string;
  public revisorMatricula!: string;
  public directorId!: string;
  public coDirectorId!: string;
  public jefaturaId!: string;
  public tesista!: Tesista;
  public revisor1!: Revisor;
  public revisor2!: Revisor;
  public director!: Director;
  public coDirector?: Director;
  public jefatura!: Jefatura;
  public currentUser: string = "tesista";
  public option: string;
  constructor(
    private service: BdTesistasService,
    private serviceR: BDRevisoresService,
    private serviceD: BDDirectoresService,
    private serviceJ: BDJefaturaService,
    private sharedDataService: SharedDataService
  ) {
    this.tesistaMatricula = this.sharedDataService.getData("tesistaMatricula");
    this.option = this.sharedDataService.getData("option");
    this.listaT = service.getTesistas();
    this.listaR = serviceR.getRevisores();
    this.listaD = serviceD.getDirectores();
    this.listaJ = serviceJ.getJefaturas();
    this.obtenerTesista();
    this.obtenerRevisor();
    this.obtenerDirectores();
    this.obtenerJefatura();
  }

  filtrarOption() {
    if (this.option == "mensajeRevisor"){}
 }


  obtenerTesista() {
    this.tesista = this.listaT.getTesistaByMatricula("123456");
  }

  obtenerRevisor() {
    this.revisor1 = this.listaR.getRevisorByMatricula(this.tesista.revisor1!);
    this.revisor2 = this.listaR.getRevisorByMatricula(this.tesista.revisor2!);
  }

  obtenerDirectores() {
    this.director = this.listaD.getDirectorById(this.tesista.directorTesis);
    if (this.tesista.codirectorTesis) {
      this.coDirector = this.listaD.getDirectorById(
        this.tesista.codirectorTesis
      );
    }
  }

  obtenerJefatura() {
    this.jefatura = this.listaJ.getJefaturaByCarrera(this.tesista.carrera)!;
  }

  guardarValorSeleccionado() {
    const revisor = document.getElementById(
      "selectRevisores"
    ) as HTMLSelectElement;
    this.revisorMatricula = revisor.value + "";
  }
}
