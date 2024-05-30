import { Component } from '@angular/core';
import { TablaAlumnosComponent } from '../tabla-alumnos/tabla-alumnos.component';
import { ChatComponent } from '../chat/chat.component';
import { TablaRevisoresComponent } from '../tabla-revisores/tabla-revisores.component';

@Component({
  selector: "app-jefatura",
  standalone: true,
  imports: [TablaAlumnosComponent, ChatComponent, TablaRevisoresComponent],
  templateUrl: "./jefatura.component.html",
  styleUrl: "./jefatura.component.css",
})
export class JefaturaComponent {
  tesistaMatricula: string = "123456"; 
  revisorMatricula: string = "654321";
  currentUser: string = "revisor";
}
