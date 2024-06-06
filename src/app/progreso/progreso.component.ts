import { Component, OnInit, ViewChild } from "@angular/core";
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
    NavMenuComponent,
  ],
  templateUrl: "./progreso.component.html",
  styleUrls: ["./progreso.component.css"],
})
export class ProgresoComponent implements OnInit {
  public listaT!: ListaTesistas;
  public listaR!: ListaRevisores;
  public listaD!: ListaDirectores;
  public listaJ!: ListaJefaturas;
  public tesistaMatricula!: string;
  public tesista!: Tesista;
  public revisor1!: Revisor;
  public revisor2!: Revisor;
  public director!: Director;
  public coDirector?: Director;
  public jefatura!: Jefatura;
  public currentUser: string = "tesista";
  public currentUserId!: string;
  public destinatario: string = "";
  public destinatarioId!: string;
  public option!: string;
  @ViewChild("modal") modal!: ChatComponent;

  constructor(
    private service: BdTesistasService,
    private serviceR: BDRevisoresService,
    private serviceD: BDDirectoresService,
    private serviceJ: BDJefaturaService,
    private sharedDataService: SharedDataService
  ) {
    this.tesistaMatricula = this.sharedDataService.getData("tesistaMatricula");

    this.listaT = service.getTesistas();
    this.listaR = serviceR.getRevisores();
    this.listaD = serviceD.getDirectores();
    this.listaJ = serviceJ.getJefaturas();
  }

  openModal() {
    this.modal.open();
  }
  ngOnInit() {
    this.obtenerTesista();
    this.obtenerRevisores();
    this.obtenerDirectores();
    this.obtenerJefatura();
  }

  obtenerTesista() {
    this.tesista = this.listaT.getTesistaByMatricula(this.tesistaMatricula);
    this.currentUserId = this.tesistaMatricula;
  }

  obtenerRevisores() {
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
    console.log(this.jefatura.nombre);
  }

  guardarValorSeleccionado(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOption = selectElement.selectedOptions[0];
    this.destinatario = selectedOption.getAttribute("data-role") || "";
    this.destinatarioId = selectedOption.value;
    this.openModal();
  }
}
