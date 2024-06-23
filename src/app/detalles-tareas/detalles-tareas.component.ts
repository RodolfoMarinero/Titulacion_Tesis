import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ModalService } from "../../service/modal.service";
import { Subscription } from "rxjs";
import { BdTareasService } from "../../service/bd-tareas.service";
import { SharedDataService } from "../../service/shared-data.service";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { Tarea } from "../../model/tarea";
import { Tesista } from "../../model/tesista";
import { ListaTesistas } from "../../model/listaTesistas";

@Component({
  selector: "app-detalles-tareas",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./detalles-tareas.component.html",
  styleUrls: ["./detalles-tareas.component.css"],
})
export class DetallesTareasComponent implements OnInit, OnChanges, OnDestroy {
  isModalActive: boolean = false;
  private subscription!: Subscription;
  @Input() tareaId!: number;
  public form!: FormGroup;
  public matriculaT: string = "";
  public listaTareas: Tarea[] = [];
  public listaTesistas: ListaTesistas = new ListaTesistas();
  public tesista: Tesista | undefined;
  tareas: Tarea[] = [];
  public id!: number;

  public tarea: Tarea | undefined;

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private servicioTarea: BdTareasService,
    private sharedDataService: SharedDataService,
    private servicio: BdTesistasService
  ) {
    this.form = this.fb.group({
      titulo: [""],
      descripcion: [""],
    });
  }

  ngOnInit() {
    this.subscription = this.modalService.modalState$.subscribe((state) => {
      this.isModalActive = state;
    });
    this.matriculaT = this.sharedDataService.getData("tesistaMatricula");
    this.filtrar();
  }

  ngOnChanges(changes: SimpleChanges) {
    alert(this.tareaId);
    if (changes["tareaId"] && this.tareaId !== undefined) {
      this.updateForm();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeModal() {
    this.modalService.closeModal();
  }

  filtrar() {
    this.servicioTarea.getTareas().subscribe((data) => {
      this.listaTareas = data;
      this.tesista = this.listaTareas.find(
        (tarea) => tarea.tesista && tarea.tesista.matricula === this.matriculaT
      )?.tesista;
      if (!this.tesista) {
        this.servicio.getUsers().subscribe((users) => {
          this.listaTesistas.tesistas = users;
          this.tesista = this.listaTesistas.tesistas.find(
            (t) => t.matricula === this.matriculaT
          );
          if (this.tesista) {
            console.log("Tesista encontrado:", this.tesista);
            alert(this.tesista?.nombre);
          } else {
            console.log(
              "No se encontró el tesista con matrícula:",
              this.matriculaT
            );
          }
        });
      }

      this.tareas = this.listaTareas.filter(
        (tarea) => tarea.tesista?.matricula === this.matriculaT
      );
      this.updateForm();
    });
  }

  updateForm() {
    this.tarea = this.tareas.find((t) => t.id === this.tareaId);
    if (this.tarea) {
      this.form.patchValue({
        titulo: this.tarea.actividad,
        descripcion: this.tarea.descripcion,
      });
    }
  }

  submit() {
    if (this.form.valid && this.tarea) {
      this.tarea.actividad = this.form.value.titulo;
      this.tarea.descripcion = this.form.value.descripcion;
      this.guardarTarea(this.tarea);
    }
    this.closeModal();
  }
    guardarTarea(tarea: Tarea) {
    this.servicioTarea.createTarea(tarea).subscribe((data) => {
      console.log("TAREA actualizada");
      this.filtrar();
    });
  }
}
