import { Component, Input } from "@angular/core";
import { TablaAlumnosComponent } from "../tabla-alumnos/tabla-alumnos.component";
import { ChatComponent } from "../chat/chat.component";
import { TablaRevisoresComponent } from "../tabla-revisores/tabla-revisores.component";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-jefatura",
  standalone: true,
  imports: [
    TablaAlumnosComponent,
    ChatComponent,
    TablaRevisoresComponent,
    NavMenuComponent,
    ChatComponent,
  ],
  templateUrl: "./jefatura.component.html",
  styleUrl: "./jefatura.component.css",
})
export class JefaturaComponent {
  constructor(private route: ActivatedRoute) {}
  filtro!: string;
  carrera!: string;
  jefatura: string = "jefatura";
  tesista: string = "tesista";
  //tesistaMatricula: string = "123456";
  //jefaturaMatricula: string = "5555";
  ngOnInit() {
    // Suscríbete a los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      this.carrera = params.get("carrera")!;
      console.log(this.carrera); // Imprime el valor de 'carrera' para verificar
      this.filtro = "carrera";
    });
    
  }
}
