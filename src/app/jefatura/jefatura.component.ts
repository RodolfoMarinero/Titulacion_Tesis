import { Component } from '@angular/core';
import { TablaAlumnosComponent } from '../tabla-alumnos/tabla-alumnos.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-jefatura',
  standalone: true,
  imports: [TablaAlumnosComponent,ChatComponent],
  templateUrl: './jefatura.component.html',
  styleUrl: './jefatura.component.css'
})
export class JefaturaComponent {

}
