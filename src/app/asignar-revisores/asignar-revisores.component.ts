import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-asignar-revisores',
  standalone: true,
  imports: [RouterModule, NavMenuComponent],
  templateUrl: './asignar-revisores.component.html',
  styleUrl: './asignar-revisores.component.css'
})
export class AsignarRevisoresComponent {

}
