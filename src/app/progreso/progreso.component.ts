// Importamos cosas necesarias para hacer la aplicación
import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalEnvioComponent } from "../modal-envio/modal-envio.component";
import { ListaTareasComponent } from "../lista-tareas/lista-tareas.component";
import { ChatComponent } from "../chat/chat.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { TaskModalComponent } from "../task-modal/task-modal.component";
import { MenuComponent } from "../menu/menu.component";
import { Tesista } from "../../model/tesista";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { ListaTesistas } from "../../model/listaTesistas";
import { SharedDataService } from "../../service/shared-data.service";
import { Revisor } from "../../model/revisor";
import { BDRevisoresService } from "../../service/bd-revisores.service";
import { Director } from "../../model/director";
import { BDDirectoresService } from "../../service/bddirectores.service";
import { Jefatura } from "../../model/jefatura";
import { BDJefaturaService } from "../../service/bdjefatura.service";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";

// Creamos un componente llamado ProgresoComponent
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
  public destinatarioId: string = "";

  @ViewChild("modal") modal!: ChatComponent;

  constructor(
    private service: BdTesistasService,
    private serviceR: BDRevisoresService,
    private serviceD: BDDirectoresService,
    private serviceJ: BDJefaturaService,
    private sharedDataService: SharedDataService
  ) {
    this.tesistaMatricula = this.sharedDataService.getData("tesistaMatricula");
  
  }

  openModal() {
    this.modal.open();
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => {
      this.listaT.tesistas = data;
      this.tesista=this.listaT.getTesistaByMatricula(this.tesistaMatricula);      
    });
  }

  guardarValorSeleccionado(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOption = selectElement.selectedOptions[0];
    this.destinatario = selectedOption.getAttribute("data-role") || "";
    this.destinatarioId = selectedOption.value;
    this.openModal();
  }
}
