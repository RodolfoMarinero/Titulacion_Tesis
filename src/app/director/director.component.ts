import { Component } from "@angular/core";
import {
  DestinatarioData,
  TablaAlumnosComponent,
} from "../tabla-alumnos/tabla-alumnos.component";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { ActivatedRoute } from "@angular/router";
import { ChatComponent } from "../chat/chat.component";

@Component({
  selector: "app-director",
  standalone: true,
  imports: [TablaAlumnosComponent, NavMenuComponent,ChatComponent],
  templateUrl: "./director.component.html",
  styleUrl: "./director.component.css",
})
export class DirectorComponent {
  public director: string = "director";
  public directorId!: string;
  public destinatarioId!: string;
  public destinatario!: string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.directorId = params.get("matriculaD")!;
      console.log(this.directorId); // Imprime el valor de 'carrera' para verificar
    });
  }
  obtenerDestinatario(data: DestinatarioData): void {
    this.destinatarioId = data.destinatarioId;
    this.destinatario = data.destinatario;
    alert(data.destinatarioId);
  }
}
