import { Component, Input, ViewChild } from '@angular/core';
import { Revisor } from '../../model/revisor';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tesista } from '../../model/tesista';
import { BDRevisoresService } from '../../service/bd-revisores.service';
import { BdTesistasService } from '../../service/bd-tesistas.service';
import { ChatComponent } from '../chat/chat.component';
import { BDChatService } from '../../service/bd-chat.service';

@Component({
  selector: "app-feedback",
  standalone: true,
  imports: [ChatComponent, ReactiveFormsModule],
  templateUrl: "./feedback.component.html",
  styleUrl: "./feedback.component.css",
})
export class FeedbackComponent {
  @Input() revisorId!: string;
  @Input() tesistaId!: string;
  @Input() tesisUrl!: string;
  revisor!: Revisor;
  tesista!: Tesista;
  user: string = "revisor";
  destinatario: string = "tesista";
  mostrarFormulario: boolean = false;
  feedbackForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private chatService: BDChatService,
    private serviceT: BdTesistasService,
    private route: ActivatedRoute
  ) {
    this.feedbackForm = this.fb.group({
      comentarios: ["", Validators.required],
      puntosFuertes: ["", Validators.required],
      mejoras: ["", Validators.required],
    });
  }
  @ViewChild("modal") modal!: ChatComponent;

  ngOnInit() {
    // Suscríbete a los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      this.tesistaId = params.get("tesistaid")!;
      this.revisorId = params.get("revisorid")!;
      this.tesisUrl = params.get("url")!;
      console.log(this.tesisUrl);
    });
    this.obtenerTesista();
  }

  obtenerTesista() {
    this.serviceT.getTesistaByMatricula(this.tesistaId).subscribe((tesista) => {
      this.tesista = tesista;
    });
  }

  openChatModal() {
    if (this.chatService.modalVisibility$) {
      this.openModal();
    }
  }
  openModal() {
    this.modal.open();
  }

  abrirFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  enviarFeedback(): void {
    if (this.feedbackForm.valid) {
      const feedback = {
        tesistaId: this.tesistaId,
        formulario: this.feedbackForm.value,
      };
      localStorage.setItem(
        `feedback_${this.tesistaId}`,
        JSON.stringify(feedback)
      );
      console.log("Feedback guardado en localStorage", feedback);
      this.mostrarFormulario = false;
    }
  }
}