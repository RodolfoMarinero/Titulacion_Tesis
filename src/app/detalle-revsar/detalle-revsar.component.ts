import { Component, Input, input } from "@angular/core";
import { ChatComponent } from "../chat/chat.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ListaTesistas } from "../../model/listaTesistas";
import { ListaRevisores } from "../../model/listaRevisores";
import { Tesista } from "../../model/tesista";
import { Revisor } from "../../model/revisor";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { BDRevisoresService } from "../../service/bd-revisores.service";
import { SharedDataService } from "../../service/shared-data.service";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";

@Component({
  selector: "app-detalle-revsar",
  standalone: true,
  imports: [ChatComponent, FormsModule, CommonModule, NavMenuComponent],
  templateUrl: "./detalle-revsar.component.html",
  styleUrl: "./detalle-revsar.component.css",
})
export class DetalleRevsarComponent {
  public listaT!: ListaTesistas;
  public listaFiltrada!: ListaTesistas;
  public listaR!: ListaRevisores;
  public tesistaMatricula!: string;
   //public revisorMatricula!: string;
  //public tesista!: Tesista;
  public revisor!: Revisor;

  //public currentUser: string = "revisor";
  //tesistaMatricula: string = "123456";
  revisorMatricula: string = "654321";
  currentUser: string = "revisor";
  constructor(
    private service: BdTesistasService,
    private serviceR: BDRevisoresService,
    private sharedDataService: SharedDataService
  ) {
    // this.tesistaMatricula = this.sharedDataService.getData("tesistaMatricula");
    this.revisorMatricula = this.sharedDataService.getData("revisorMatricula");
    
    this.service.getUsers().subscribe((data) => {
      this.listaT.tesistas = data;
    });
    this.listaR = serviceR.getRevisores();
    this.listaFiltrada = new ListaTesistas();
    this.obtenerRevisor();
    this.filtrarTesistasPorRevisor();
   
  }

  obtenerRevisor() {
    this.revisor = this.listaR.getRevisorByMatricula(this.revisorMatricula);
  }
  filtrarTesistasPorRevisor() {
    for (let tesista of this.listaT.getTesistas()) {
      if (
        tesista.revisor1 == this.revisorMatricula ||
        tesista.revisor2 == this.revisorMatricula
      ) {
        this.listaFiltrada.agregar(tesista);
      }
    }
  }

  guardarValorSeleccionado() {
    const selectElement = document.getElementById(
      "selectTesistas"
    ) as HTMLSelectElement;
    this.tesistaMatricula = selectElement.value + "";
     
  }
}