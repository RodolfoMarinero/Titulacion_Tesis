import { Component, ViewChild } from '@angular/core';
import { DetallesTareasComponent } from '../detalles-tareas/detalles-tareas.component';

@Component({
  selector: "app-task-modal",
  standalone: true,
  imports: [DetallesTareasComponent],
  templateUrl: "./task-modal.component.html",
  styleUrl: "./task-modal.component.css",
})
export class TaskModalComponent {
  
}
