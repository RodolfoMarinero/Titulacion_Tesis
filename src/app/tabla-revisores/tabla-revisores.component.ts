import { Component, OnInit } from "@angular/core";
import { BDRevisoresService } from "../bd-revisores.service";
import { ListaRevisores } from "../../model/listaRevisores";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ListaTesistas } from "../../model/listaTesistas";
import { Revisor } from "../../model/revisor";

@Component({
  selector: "app-tabla-revisores",
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, FormsModule, CommonModule],
  templateUrl: "./tabla-revisores.component.html",
  styleUrl: "./tabla-revisores.component.css",
})
export class TablaRevisoresComponent {
  public listaRevisores = new ListaRevisores();
  constructor(private service: BDRevisoresService) {
    this.cargarRevisores();
    this.listaRevisores = service.getRevisores();
    console.log("Lista de revisores:", this.listaRevisores);
  }
  cargarRevisores() {
    // Crear instancias de revisores
    const revisor1 = new Revisor(
      "matricula1",
      "Nombre1",
      "Apellidos1",
      "Area1",
      "Universidad1",
      new ListaTesistas
    );
    const revisor2 = new Revisor(
      "matricula2",
      "Nombre2",
      "Apellidos2",
      "Area2",
      "Universidad2",
      new ListaTesistas()
    );
    const revisor3 = new Revisor(
      "matricula3",
      "Nombre3",
      "Apellidos3",
      "Area3",
      "Universidad3",
      new ListaTesistas()
    );
    const revisor4 = new Revisor(
      "matricula4",
      "Nombre4",
      "Apellidos4",
      "Area4",
      "Universidad4",
      new ListaTesistas()
    );
    const revisor5 = new Revisor(
      "matricula5",
      "Nombre5",
      "Apellidos5",
      "Area5",
      "Universidad5",
      new ListaTesistas()
    );

    // Agregar revisores a la lista
    this.listaRevisores.agregar(revisor1);
    this.listaRevisores.agregar(revisor2);
    this.listaRevisores.agregar(revisor3);
    this.listaRevisores.agregar(revisor4);
    this.listaRevisores.agregar(revisor5);

    this.service.setRevisores(this.listaRevisores);
  }
}
