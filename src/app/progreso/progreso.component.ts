// Importamos cosas necesarias para hacer la aplicación
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalEnvioComponent } from "../modal-envio/modal-envio.component";
import { ListaTareasComponent } from "../lista-tareas/lista-tareas.component";
import { ChatComponent } from "../chat/chat.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { TaskModalComponent } from "../task-modal/task-modal.component";
import { MenuComponent } from "../menu/menu.component";
import { Tesista } from "../../model/tesista";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { ListaTesistas } from "../../model/listaTesistas";
import { SharedDataService } from "../../service/shared-data.service";
import { Revisor } from "../../model/revisor";
import { BDRevisoresService } from "../../service/bd-revisores.service";
import { Director } from "../../model/director";
import { BDDirectoresService } from "../../service/bddirectores.service";
import { Jefatura } from "../../model/jefatura";
import { BDJefaturaService } from "../../service/bdjefatura.service";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

// Creamos un componente llamado ProgresoComponent
@Component({
  selector: "app-progreso",
  standalone: true,
  imports: [
    MenuComponent,
    ModalEnvioComponent,
    ListaTareasComponent,
    ChatComponent,
    TaskListComponent,
    TaskModalComponent,
    CommonModule,
    NavMenuComponent,
    ReactiveFormsModule,
  ],
  templateUrl: "./progreso.component.html",
  styleUrls: ["./progreso.component.css"],
})
export class ProgresoComponent implements OnInit {
  public listaT!: ListaTesistas;
  @Input() matriculaT: string = "";
  public tesista!: Tesista;
  public revisor1!: Revisor;
  public revisor2!: Revisor;
  public director!: Director;
  public coDirector?: Director;
  public jefatura!: Jefatura;
  public currentUser: string = "tesista";
  feedback: any;
  public destinatario: string = "";
  public destinatarioId: string = "";
  form: FormGroup;
  uploadForm: FormGroup;

  @ViewChild("modal") modal!: ChatComponent;
  public isModalActive: boolean = false;

  constructor(
    private service: BdTesistasService,
    private serviceR: BDRevisoresService,
    private serviceD: BDDirectoresService,
    private serviceJ: BDJefaturaService,
    private sharedDataService: SharedDataService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      selectDestinatarios: ["", Validators.required],
    });
    this.uploadForm = this.fb.group({
      driveUrl: [
        "",
        [Validators.required, Validators.pattern("https://docs.google.com/.*")],
      ],
    });
    //this.tesistaMatricula = this.sharedDataService.getData("tesistaMatricula");
    //alert("matricula " + this.matriculaT);
  }
  submitUrl(): void {
    if (this.uploadForm.valid) {
      this.sharedDataService.setData(
        "tesis_" + this.matriculaT,
        this.uploadForm.value.driveUrl
      );
      console.log(this.uploadForm.value);
      // Cerrar el modal después de enviar la URL
      this.close();
    }
  }
  openModal() {
    this.modal.open();
  }
  abrirModal() {
    this.isModalActive = true;
  }
  close() {
    this.isModalActive = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.matriculaT = params["matriculaT"];
      //alert("matricula " + this.matriculaT);
      this.obtenerTesista(this.matriculaT);
    });
    this.cargarFeedback();
  }
  cargarFeedback(): void {
    const feedbackStr = localStorage.getItem(`feedback_${this.matriculaT}`);
    if (feedbackStr) {
      this.feedback = JSON.parse(feedbackStr);
    } else {
      console.log("No se encontró feedback en localStorage");
    }
  }
  obtenerTesista(matricula: string): void {
    this.service.getTesistaByMatricula(matricula).subscribe((tesista) => {
      this.tesista = tesista;
      alert("tesista " + this.tesista.nombre);
      this.obtenerRevisor1DelTesista();
      this.obtenerRevisor2DelTesista();
      this.obtenerJefaturaDelTesista();
      this.obtenerDirectorDelTesista();
      this.obtenerCoDirectorDelTesista();
    });
  }
  obtenerRevisor1DelTesista() {
    this.service
      .getRevisor(this.tesista.revisor1 ?? "")
      .subscribe((revisor) => {
        this.revisor1 = revisor;
        //alert("revisor" + this.revisor1.nombre);
      });
  }
  obtenerRevisor2DelTesista() {
    this.service
      .getRevisor(this.tesista.revisor2 ?? "")
      .subscribe((revisor) => {
        this.revisor2 = revisor;
        //alert("revisor" + this.revisor2.nombre);
      });
  }
  obtenerJefaturaDelTesista() {
    this.service.getJefatura(this.tesista.carrera).subscribe((jefatura) => {
      this.jefatura = jefatura;
      //alert("jefe" + this.jefatura.nombre);
    });
  }
  obtenerDirectorDelTesista() {
    this.service
      .getDirector(this.tesista.directorTesis)
      .subscribe((director) => {
        this.director = director;
        //alert("director" + this.director.nombre);
      });
  }
  obtenerCoDirectorDelTesista() {
    if (this.tesista.codirectorTesis) {
      this.service
        .getCoDirector(this.tesista.codirectorTesis)
        .subscribe((coDirector) => {
          this.coDirector = coDirector;
          //alert("director" + this.director.nombre);
        });
    }
  }
  actualizarDestinatario(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    this.destinatarioId = selectElement.value;
    this.destinatario = selectedOption.getAttribute("data-role") ?? "";
  }

  submit() {
    this.openModal();
  }
}
