import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ModalService } from "../../service/modal.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-detalles-tareas",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./detalles-tareas.component.html",
  styleUrl: "./detalles-tareas.component.css",
})
export class DetallesTareasComponent implements OnInit, OnDestroy {
  isModalActive: boolean = false;
  private subscription!: Subscription;

  public form!: FormGroup;
  constructor(builder: FormBuilder, private modalService: ModalService) {
    this.form = builder.group({
      titulo: [""],
      estado: [""],
      descripcion: [""],
    });
  }

  submit() {
    // Lógica de envío del formulario
    console.log(this.form.value);
    this.closeModal();
  }
  ngOnInit() {
    this.subscription = this.modalService.modalState$.subscribe((state) => {
      this.isModalActive = state;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
