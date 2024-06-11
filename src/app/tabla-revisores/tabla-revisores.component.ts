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
  imports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CommonModule,
    NavMenuComponent,
  ],
  templateUrl: "./tabla-revisores.component.html",
  styleUrl: "./tabla-revisores.component.css",
})
export class TablaRevisoresComponent implements OnInit {
  public listaRevisores = new ListaRevisores();
  constructor(
    private service: BDRevisoresService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {
   
  }
  ngOnInit() {
    this.service.getUsers().subscribe((data) => {
      this.listaRevisores.revisores = data;
    });
    
    console.log("Lista de tesistas:", this.listaRevisores);
  }
 
  navigateToRevisarTesis(revisorMatricula: string) {
    this.sharedDataService.setData("revisorMatricula", revisorMatricula);
    this.router.navigate(["/vistaRevisor"]);
  }
}
