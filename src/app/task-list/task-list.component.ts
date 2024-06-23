import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { BdTareasService } from "../../service/bd-tareas.service";
import { Tarea } from "../../model/tarea";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { ListaTesistas } from "../../model/listaTesistas";
import { Tesista } from "../../model/tesista";
import { SharedDataService } from "../../service/shared-data.service";
import { DetallesTareasComponent } from "../detalles-tareas/detalles-tareas.component";
import { ModalService } from "../../service/modal.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [DetallesTareasComponent, ReactiveFormsModule],
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  @Input() matriculaT!: string;
  public listaTareas: Tarea[] = [];
  public listaTesistas: ListaTesistas = new ListaTesistas();
  public tesista: Tesista | undefined;
  tareas: Tarea[] = [];
  form: FormGroup;
  public tareaId!: number;
  public i = 0;

  constructor(
    private fb: FormBuilder,
    private servicioTarea: BdTareasService,
    private servicio: BdTesistasService,
    public modalService: ModalService,
    private sharedDataService: SharedDataService
  ) {
    this.form = this.fb.group({
      actividad: ["", Validators.required],
      estado: ["En curso", Validators.required],
      fecha_inicial: [
        { value: this.getCurrentDate(), disabled: false },
        Validators.required,
      ],
      fecha_limite: ["", Validators.required],
      filtroEstado: ["Tareas"],
    });
    this.form.get("filtroEstado")?.valueChanges.subscribe(() => {
      this.filtrar();
    });
  }

  ngOnInit() {
    this.matriculaT = this.sharedDataService.getData("tesistaMatricula");
    this.filtrar();
  }

  getCurrentDate(): string {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Formato YYYY-MM-DD
  }

  openModal(id: number): void {
    this.guardarId(id);
    this.modalService.openModal();
  }

  agregarTarea() {
    if (this.form.valid) {

      this.servicioTarea.generateUniqueId().subscribe((id) => {
        let idTarea = this.i !== 0 ? this.i : id;
        let nuevaTarea = new Tarea(
          idTarea,
          this.form.value.actividad,
          this.form.value.estado,
          this.form.value.fecha_inicial,
          this.form.value.fecha_limite,
          this.tesista,
          ""
        );
        this.guardarTarea(nuevaTarea);
        this.i = 0;
        this.form.reset({
          estado: "En curso",
          fecha_inicial: this.getCurrentDate(),
          filtroEstado: "Tareas",
        });
      });
    }
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

      const filtroEstado = this.form.value.filtroEstado;
      if (filtroEstado === "Tareas") {
        this.tareas = this.listaTareas.filter(
          (tarea) => tarea.tesista?.matricula === this.matriculaT
        );
      } else {
        this.tareas = this.listaTareas.filter(
          (tarea) =>
            tarea.tesista?.matricula === this.matriculaT &&
            tarea.estado === filtroEstado
        );
      }
    });
  }

  guardarTarea(tarea: Tarea) {
    this.servicioTarea.createTarea(tarea).subscribe((data) => {
      console.log("TAREA agregada");
      this.filtrar();
    });
  }

  actualizarTarea(id: number) {
    const tarea = this.listaTareas.find((t) => t.id === id);
    this.i = tarea?.id ?? 0;
    if (tarea) {
      this.form.setValue({
        actividad: tarea.actividad,
        estado: tarea.estado,
        fecha_inicial: tarea.fechaInicial.toString().split("T")[0],
        fecha_limite: tarea.fechaLimite.toString().split("T")[0],
        filtroEstado: this.form.value.filtroEstado, 
      });
    }
  }

  guardarId(id: number) {
    this.sharedDataService.setData("tareaId", id);
    this.tareaId = id;
  }
}
