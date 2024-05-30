import { Component } from '@angular/core';
 
import { Router, RouterLink, RouterModule } from "@angular/router";
import { Tesista } from "../../model/tesista";
import { ListaTesistas } from "../../model/listaTesistas";
import { BdTesistasService } from "../bd-tesistas.service";

import { SharedDataService } from "../shared-data.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-tabla-tesistas",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tabla-tesistas.component.html",
  styleUrl: "./tabla-tesistas.component.css",
})
export class TablaTesistasComponent {
  public lista: ListaTesistas = new ListaTesistas();

  constructor(
    private router: Router,
    private service: BdTesistasService,
    private sharedDataService: SharedDataService
  ) {
    this.cargarLocal();
    this.lista = service.getTesistas();
    console.log("Lista de tesistas:", this.lista);
  }
  cargarLocal() {
    // Crear instancias de Tesista con datos de prueba
    let tesista1 = new Tesista(
      "123456",
      "Juan",
      "Pérez",
      "Ingeniería Informática",
      "Desarrollo de una aplicación web",
      "Dr. Antonio Gómez",
      "juan@example.com",
      "password123",
      true,
      "111111",
      "654321"
    );

    let tesista2 = new Tesista(
      "987654",
      "María",
      "González",
      "Ciencias de la Computación",
      "Inteligencia Artificial",
      "Dr. Roberto Martínez",
      "maria@example.com",
      "password456",
      true,
      "111111",
      "654321"
    );

    let tesista3 = new Tesista(
      "456789",
      "Pedro",
      "López",
      "Ingeniería Eléctrica",
      "Diseño de un sistema de control automático",
      "Dr. Alejandro Pérez",
      "pedro@example.com",
      "password789",
      false,
      "111111",
      "654321"
    );

    // Agregar los tesistas a la lista
    this.lista.agregar(tesista1);
    this.lista.agregar(tesista2);
    this.lista.agregar(tesista3);

    this.service.setTesistas(this.lista);
  }

  navigateToProgreso(tesistaMatricula: string) {
    this.sharedDataService.setData("matriculaT", tesistaMatricula);
    this.router.navigate(["/progreso"]);
  }
}3
