import { Component, Input } from "@angular/core";
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
  public lista: ListaTesistas = new ListaTesistas();
  constructor(private service: BdTesistasService) {
    this.lista = service.getTesistas();
  }
  //@Input() tesistaMatricula!: string;
  tesistaMatricula: string = "123456"; // Asigna la matrícula del tesista aquí
  revisorMatricula: string = "654321"; // Asigna la matrícula del revisor aquí
  currentUser: string = "tesista";
  public tesista: Tesista = this.lista.getTesistaByMatricula(
    this.tesistaMatricula
  );
  //public revisorMatricula?: string = this.tesista.revisor1;
}
