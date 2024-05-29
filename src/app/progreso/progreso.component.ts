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
  ],
  templateUrl: "./progreso.component.html",
  styleUrls: ["./progreso.component.css"],
})
export class ProgresoComponent {
  public listaT!: ListaTesistas;
  public listaR!: ListaRevisores;
  public tesistaMatricula!: string;
  public revisorMatricula!: string;
  public tesista!: Tesista;
  public revisor1!: Revisor;
  public revisor2!: Revisor;
  public currentUser: string = "tesista";
  constructor(
    private service: BdTesistasService,
    private serviceR:BDRevisoresService,
    private sharedDataService: SharedDataService
  ) {
    this.tesistaMatricula = sharedDataService.getData();
    
    this.listaT = service.getTesistas();
    this.listaR = serviceR.getRevisores();
    this.obtenerTesista();
    this.obtenerRevisor();
  }
  //@Input()

  obtenerTesista() {
    this.tesista = this.listaT.getTesistaByMatricula(this.tesistaMatricula);
  }
  obtenerRevisor() {
    this.revisor1 = this.listaR.getRevisorByMatricula(this.tesista.revisor1!);
    this.revisor2 = this.listaR.getRevisorByMatricula(this.tesista.revisor2!);
  }
  guardarValorSeleccionado() {
    const revisor = document.getElementById(
      "selectRevisores"
    ) as HTMLSelectElement;
    this.revisorMatricula = revisor.value + "";
  }
}
