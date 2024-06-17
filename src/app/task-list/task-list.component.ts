import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { ListaTareas } from "../../model/listaTareas";
import { BdTareasService } from "../../service/bd-tareas.service";
import { Tarea } from "../../model/tarea";
import { DetallesTareasComponent } from "../detalles-tareas/detalles-tareas.component";
import { ModalService } from "../../service/modal.service";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { ListaTesistas } from "../../model/listaTesistas";
import { Tesista } from "../../model/tesista";
import { SharedDataService } from "../../service/shared-data.service";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [DetallesTareasComponent, ReactiveFormsModule],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.css",
})
export class TaskListComponent implements OnInit {
  @Input() matriculaT!: String;
  public listaTareas: Tarea[]=[];
  public listaTesistas: ListaTesistas = new ListaTesistas();
  public tesista!: Tesista;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,

    private servicio: BdTesistasService,
    private modalService: ModalService,
    private sharedDataService: SharedDataService
  ) {
    this.matriculaT = this.sharedDataService.getData("tesistaMatricula");

    this.form = this.fb.group({
      actividad: ["", Validators.required],
      estado: ["En curso", Validators.required],
      fecha_inicial: [
        { value: this.getCurrentDate(), disabled: false },
        Validators.required,
      ],
      fecha_limite: ["", Validators.required],
    });
  }
  ngOnInit() {
    // Obtén los datos de los usuarios del servicio
    this.servicio.getUsers().subscribe(
      (data) => {
        console.log("Data received from service:", data); // Log data
        this.listaTesistas.tesistas = data;
        this.tesista = this.listaTesistas.getTesistaByMatricula(
          this.matriculaT
        );
        if (this.tesista) {
          console.log("Tesista found:", this.tesista); // Log tesista
          alert(this.tesista.nombre);
        } else {
          console.warn("Tesista not found with matricula:", this.matriculaT); // Log warning if tesista not found
        }
      },
      (error) => {
        console.error("Error fetching users:", error); // Log error if request fails
      }
    );
  }

  getCurrentDate(): string {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Formato YYYY-MM-DD
  }
  openModal() {
    this.modalService.openModal();
  }
public i=0;
  agregarTarea() {
    if (this.form.valid) {
      const nuevaTarea = new Tarea(
        this.i + 1,
        this.form.value.actividad,
        this.form.value.estado,
        this.form.get("fecha_inicial")?.value,
        this.form.value.fecha_limite
      );
      this.listaTareas.push(nuevaTarea);
      this.tesista.tareas = this.listaTareas;
      this.guardarTesista(this.tesista);
      this.form.reset({
        estado: "En curso",
        fecha_inicial: this.getCurrentDate(),
      });
    }
  }
  guardarTesista(tesista: Tesista) {
    this.servicio.createTesista(tesista).subscribe((data) => {
      console.log("tesista actualizado");
      this.servicio.getUsers().subscribe((data) => {
        this.listaTesistas.tesistas = data;
      });
    });
  }
}
