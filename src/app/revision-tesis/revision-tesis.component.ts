import { Component } from '@angular/core';
import { TablaAlumnosComponent } from '../tabla-alumnos/tabla-alumnos.component';
import { HeaderRevisionComponent } from '../header-revision/header-revision.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-revision-tesis',
  standalone: true,
  imports: [TablaAlumnosComponent,HeaderRevisionComponent, NavMenuComponent],
  templateUrl: './revision-tesis.component.html',
  styleUrl: './revision-tesis.component.css'
})
export class RevisionTesisComponent {

}
