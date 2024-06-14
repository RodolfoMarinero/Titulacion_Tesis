import { Component, ViewChild } from "@angular/core";
import { TablaAlumnosComponent } from "../tabla-alumnos/tabla-alumnos.component";
import { DetalleRevsarComponent } from "../detalle-revsar/detalle-revsar.component";
import { HeaderRevisionComponent } from "../header-revision/header-revision.component";
import { RevisionTesisComponent } from "../revision-tesis/revision-tesis.component";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { SharedDataService } from "../../service/shared-data.service";
import { ChatComponent } from "../chat/chat.component";
import { BDChatService } from "../../service/bd-chat.service";

@Component({
  selector: "app-vista-revisar-tesis",
  standalone: true,
  imports: [
    TablaAlumnosComponent,
    DetalleRevsarComponent,
    RevisionTesisComponent,
    NavMenuComponent,
    ChatComponent,
  ],
  templateUrl: "./vista-revisar-tesis.component.html",
  styleUrls: ["./vista-revisar-tesis.component.css"],
})
export class VistaRevisarTesisComponent {
  public revisorMatricula: string;
  public tesistaMatricula!: string;
  public destinatarioId!: string;
  public user: string = "revisor";
  public destinatario: string = "tesista";
  public activar!: string;
  @ViewChild("modal") modal!: ChatComponent;

  openModal() {
    this.modal.open();
  }
  constructor(
    private dato: SharedDataService,
    private chatService: BDChatService
  ) {
    this.revisorMatricula = this.dato.getData("revisorMatricula");
    //this.tesistaMatricula = this.dato.getData("tesistaM");
    

    //this.activar = this.dato.getData("isModalActivo");
    console.log(this.revisorMatricula);
    //console.log(this.tesistaMatricula);
    // console.log(this.activar);
  }
  openChatModal() {
    if (this.chatService.modalVisibility$) {
      this.openModal();
    }
  }
  obtenerTesistaMatricula(tesistaM: string): void {
    this.tesistaMatricula = tesistaM;
    this.destinatarioId = this.tesistaMatricula;;
    this.tesistaMatricula = "";
  }
}
