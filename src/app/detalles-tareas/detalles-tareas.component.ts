import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-detalles-tareas",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./detalles-tareas.component.html",
  styleUrl: "./detalles-tareas.component.css",
})
export class DetallesTareasComponent {
  @Output() closeModal = new EventEmitter<void>();

  isModalActive: boolean = false;
  public form!: FormGroup;
  constructor(builder: FormBuilder) {
    this.form = builder.group({
      titulo: [""],
      estado: [""],
      descripcion: [""],
    });
  }

  submit() {}
  open() {
    this.isModalActive = true;
  }
  close() {
    this.isModalActive = false;
    this.closeModal.emit();
  }
}
