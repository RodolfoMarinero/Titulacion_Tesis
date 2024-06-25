import { Component, Input } from "@angular/core";
import {
  DestinatarioData,
  TablaAlumnosComponent,
} from "../tabla-alumnos/tabla-alumnos.component";
import { ChatComponent } from "../chat/chat.component";
import { TablaRevisoresComponent } from "../tabla-revisores/tabla-revisores.component";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { ActivatedRoute } from "@angular/router";
import { BDChatService } from "../../service/bd-chat.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-jefatura",
  standalone: true,
  imports: [
    TablaAlumnosComponent,
    ChatComponent,
    TablaRevisoresComponent,
    NavMenuComponent,
    
  ],
  templateUrl: "./jefatura.component.html",
  styleUrl: "./jefatura.component.css",
})
export class JefaturaComponent {
  constructor(private route: ActivatedRoute) {}

  filtro!: string;
  carrera!: string;
  jefatura: string = "jefatura";
  matriculaJ!: string;
  destinatarioId!: string;
  destinatario!: string;

  ngOnInit() {
    // Suscríbete a los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      this.carrera = params.get("carrera")!;
      this.matriculaJ = params.get("matriculaJ")!;
      console.log(this.carrera); // Imprime el valor de 'carrera' para verificar
      this.filtro = "carrera";
    });
  }

  obtenerDestinatario(data: DestinatarioData): void {
    this.destinatarioId = data.destinatarioId;
    this.destinatario = data.destinatario;
    alert(data.destinatarioId);
  }
}