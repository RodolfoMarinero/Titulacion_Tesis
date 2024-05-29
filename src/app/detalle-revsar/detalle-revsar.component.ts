import { Component, Input, input } from "@angular/core";
import { ChatComponent } from "../chat/chat.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ListaTesistas } from "../../model/listaTesistas";
import { ListaRevisores } from "../../model/listaRevisores";
import { Tesista } from "../../model/tesista";
import { Revisor } from "../../model/revisor";
import { BdTesistasService } from "../bd-tesistas.service";
import { BDRevisoresService } from "../bd-revisores.service";
import { SharedDataService } from "../shared-data.service";

@Component({
  selector: "app-detalle-revsar",
  standalone: true,
  imports: [ChatComponent, FormsModule, CommonModule],
  templateUrl: "./detalle-revsar.component.html",
  styleUrl: "./detalle-revsar.component.css",
})
export class DetalleRevsarComponent {
  public listaT!: ListaTesistas;
  public listaR!: ListaRevisores;
  public tesistaMatricula!: string;
  public revisorMatricula!: string;
  public tesista!: Tesista;
 
  public currentUser: string = "revisor";
  constructor(
    private service: BdTesistasService,
    private serviceR: BDRevisoresService,
    private sharedDataService: SharedDataService
  ) {
    this.tesistaMatricula = sharedDataService.getData();

    this.listaT = service.getTesistas();
    this.listaR = serviceR.getRevisores();
    this.obtenerTesista();
    
  }
  
  obtenerTesista() {
    this.tesista = this.listaT.getTesistaByMatricula(this.tesistaMatricula);
  }
  
  guardarValorSeleccionado() {
    const revisor = document.getElementById(
      "selectRevisores"
    ) as HTMLSelectElement;
    this.revisorMatricula = revisor.value + "";
  }
}