import { Component } from "@angular/core";
import { ListaTareas } from "../../model/listaTareas";
import { BdTareasService } from "../bd-tareas.service";
import { Tarea } from "../../model/tarea";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.css",
})
export class TaskListComponent {
  public listaTareas: ListaTareas = new ListaTareas();
  nuevaTarea: Tarea = {
    id: 1,
    actividad: "Hola Mundo",
    estado: "En curso",
    fecha: new Date(),
  };

  constructor(private bdTareasService: BdTareasService) {
    this.agregarTarea();
    this.cargarTareas();
  }

  cargarTareas() {
    this.listaTareas = this.bdTareasService.getTareas();
  }

  agregarTarea() {
    this.listaTareas.agregar(this.nuevaTarea);
    this.bdTareasService.setTareas(this.listaTareas);
    // Puedes restablecer la nuevaTarea si deseas permitir la adición de múltiples tareas en la misma sesión.
    this.nuevaTarea = {
      id: 1,
      actividad: "",
      estado: "En curso",
      fecha: new Date(),
    };
  }
}
