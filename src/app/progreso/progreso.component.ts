import { Component } from '@angular/core';

import { ModalEnvioComponent } from '../modal-envio/modal-envio.component';
import { ListaTareasComponent } from '../lista-tareas/lista-tareas.component';
import { ChatComponent } from '../chat/chat.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: "app-progreso",
  standalone: true,
  imports: [
    ModalEnvioComponent,
    ListaTareasComponent,
    ChatComponent,
    TaskListComponent,
    TaskModalComponent,
    SidebarComponent,
    MenuComponent,
  ],
  templateUrl: "./progreso.component.html",
  styleUrl: "./progreso.component.css",
})
export class ProgresoComponent {}
