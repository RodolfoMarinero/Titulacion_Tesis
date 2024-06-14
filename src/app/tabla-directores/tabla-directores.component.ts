import { Component, OnInit } from '@angular/core';
import { BDDirectoresService } from '../../service/bddirectores.service';
import { Director } from '../../model/director';
import { ListaDirectores } from '../../model/listaDirectores';
import { BDJefaturaService } from '../../service/bdjefatura.service';
import { Jefatura } from '../../model/jefatura';
import { ListaJefaturas } from '../../model/listaJefaturas';

@Component({
  selector: 'app-tabla-directores',
  standalone: true,
  imports: [],
  templateUrl: './tabla-directores.component.html',
  styleUrl: './tabla-directores.component.css'
})
export class TablaDirectoresComponent implements OnInit {
  public listaDirectores = new ListaDirectores();

  constructor(private service: BDDirectoresService) {
 
  }
  ngOnInit() {
    this.service.getUsers().subscribe((data) => {
      this.listaDirectores.directores = data;
    });
    
    console.log("Lista de directores:", this.listaDirectores);
  }
}
