import { Component } from '@angular/core';
import { BDDirectoresService } from '../bddirectores.service';
import { Director } from '../../model/director';
import { ListaDirectores } from '../../model/listaDirectores';
import { BDJefaturaService } from '../bdjefatura.service';
import { Jefatura } from '../../model/jefatura';
import { ListaJefaturas } from '../../model/listaJefaturas';

@Component({
  selector: 'app-tabla-directores',
  standalone: true,
  imports: [],
  templateUrl: './tabla-directores.component.html',
  styleUrl: './tabla-directores.component.css'
})
export class TablaDirectoresComponent {
  public lista = new ListaDirectores();
  public lista2 = new ListaJefaturas();
  constructor(private service: BDDirectoresService,private servicio:BDJefaturaService) {
    this.cargarLocal();
  }
  cargarLocal() {
    let director = new Director("123098", "Director1", "apellidos", "area", "UNPA");
    this.lista.agregar(director);
    this.service.setDirectores(this.lista);
    let jefe = new Jefatura("5555", "Fabian", "Ruiz", "Ingeniería Informática", "UNPA", "email");
    this.lista2.agregar(jefe);
    this.servicio.setJefaturas(this.lista2);
  }
}
