import { Component } from '@angular/core';
import { TablaAlumnosComponent } from '../tabla-alumnos/tabla-alumnos.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-director',
  standalone: true,
  imports: [TablaAlumnosComponent, NavMenuComponent],
  templateUrl: './director.component.html',
  styleUrl: './director.component.css'
})
export class DirectorComponent {

}
