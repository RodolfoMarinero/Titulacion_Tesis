import { Component, OnInit } from "@angular/core";
import { BDRevisoresService } from "../bd-revisores.service";
import { ListaRevisores } from "../../model/listaRevisores";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ListaTesistas } from "../../model/listaTesistas";
import { Revisor } from "../../model/revisor";
import { SharedDataService } from "../shared-data.service";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";

@Component({
  selector: "app-tabla-revisores",
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, FormsModule, CommonModule,NavMenuComponent],
  templateUrl: "./tabla-revisores.component.html",
  styleUrl: "./tabla-revisores.component.css",
})
export class TablaRevisoresComponent {
  public listaRevisores = new ListaRevisores();
  constructor(
    private service: BDRevisoresService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {
    this.cargarRevisores();
    this.listaRevisores = service.getRevisores();
    console.log("Lista de revisores:", this.listaRevisores);
  }
  cargarRevisores() {
    // Crear instancias de revisores
    const revisor1 = new Revisor(
      "654321",
      "Carlos",
      "Cardoza",
      "Ingeniería Computacion",
      "Universidad del Papaloapan"
    );
    const revisor2 = new Revisor(
      "111111",
      "Kary",
      "Montalvo",
      "Ingeniería Computacion",
      "Universidad del Papaloapan"
    );
    const revisor3 = new Revisor(
      "1234632",
      "Juan",
      "Pérez García",
      "Ingeniería de Software",
      "Universidad Nacional Autónoma de México"
     
    );

    const revisor4 = new Revisor(
      "98765",
      "Ana",
      "López Hernández",
      "Ciencias de la Computación",
      "Instituto Politécnico Nacional"
     
    );

    const revisor5 = new Revisor(
      "32987",
      "Carlos",
      "Sánchez Martínez",
      "Tecnologías de la Información",
      "Universidad Autónoma Metropolitana"
    );

    // Agregar revisores a la lista
    this.listaRevisores.agregar(revisor1);
    this.listaRevisores.agregar(revisor2);
    this.listaRevisores.agregar(revisor3);
    this.listaRevisores.agregar(revisor4);
    this.listaRevisores.agregar(revisor5);

    this.service.setRevisores(this.listaRevisores);
  }
  navigateToRevisarTesis(revisorMatricula: string) {
    this.sharedDataService.setData("revisorMatricula", revisorMatricula);
    this.router.navigate(["/vistaRevisor"]);
  }
}
