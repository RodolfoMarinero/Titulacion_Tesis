import { Component, OnInit } from '@angular/core';
import { ListaJefaturas } from '../../model/listaJefaturas';
import { BDJefaturaService } from '../../service/bdjefatura.service';

@Component({
  selector: "app-tabla-jefes",
  standalone: true,
  imports: [],
  templateUrl: "./tabla-jefes.component.html",
  styleUrl: "./tabla-jefes.component.css",
})
export class TablaJefesComponent implements OnInit {
  public listaJefes= new ListaJefaturas();

  constructor(private service: BDJefaturaService) { }
  
  ngOnInit() {
    this.service.getUsers().subscribe((data) => {
      this.listaJefes.jefaturas = data;
    });

    console.log("Lista de Jefes:", this.listaJefes);
  }
}
