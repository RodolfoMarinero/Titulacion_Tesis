import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BDChatService } from "../../service/bd-chat.service";
import { Tesista } from "../../model/tesista";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { BDRevisoresService } from "../../service/bd-revisores.service";
import { Revisor } from "../../model/revisor";
import { BDDirectoresService } from "../../service/bddirectores.service";
import { Director } from "../../model/director";
import { BDJefaturaService } from "../../service/bdjefatura.service";
import { Jefatura } from "../../model/jefatura";
import { ListaTesistas } from "../../model/listaTesistas";
import { ListaRevisores } from "../../model/listaRevisores";
import { ListaDirectores } from "../../model/listaDirectores";
import { ListaJefaturas } from "../../model/listaJefaturas";


interface Message {
  text: string;
  type: "sent" | "received";
  sender: string;
}

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ChatComponent implements OnChanges {
  @Input() destinatario!: string; // Puede ser 'revisor', 'director', 'jefatura', etc.
  @Input() destinatarioId!: string;
  @Input() currentUser!: string;
  @Input() currentUserId!: string;

  public tesista?: Tesista;
  public revisor?: Revisor;
  public director?: Director;
  public jefatura?: Jefatura;
  isModalActive: boolean = false;
  newMessage: string = "";
  messages: Message[] = [];
  showClearButton: boolean = false;
  chatHeader!: string;
  @Output() closeModal = new EventEmitter<void>();

  constructor(
    private serviceT: BdTesistasService,
    private serviceR: BDRevisoresService,
    private serviceD: BDDirectoresService,
    private serviceJ: BDJefaturaService,
    private chatService: BDChatService
  ) {
    this.chatService.modalVisibility$.subscribe((isVisible) => {
      this.isModalActive = isVisible;
    });
  }



  ngOnChanges(changes: SimpleChanges) {
    if (
      changes["destinatario"] ||
      changes["destinatarioId"] ||
      changes["currentUser"] ||
      changes["currentUserId"]
    ) {
      this.loadParticipants();
      this.loadMessages();
      this.updateChatHeader();
      console.log("destinatario", this.destinatarioId);
    }
  }

  open() {
    this.isModalActive = true;
  }

  loadParticipants() {
    if (this.destinatario === "tesista") {
      this.serviceT
        .getTesistaByMatricula(this.destinatarioId)
        .subscribe((tesista) => {
          this.tesista = tesista;
          if (this.tesista) {
            console.log("tesista", this.tesista.matricula);
            this.updateChatHeader();
          }
        });
    } else if (this.destinatario === "revisor") {
      this.serviceR.getRevisor(this.destinatarioId).subscribe((revisor) => {
        this.revisor = revisor;
        if (this.revisor) {
          this.updateChatHeader();
        }
      });
    } else if (this.destinatario === "director") {
      this.serviceT
        .getDirector(this.destinatarioId)
        .subscribe((director) => {
          this.director = director;
          alert(this.director.nombre);
          if (this.director) {
            this.updateChatHeader();
          }
        });
    } else if (this.destinatario === "jefatura") {
      this.serviceJ
        .getJefaturaById(this.destinatarioId)
        .subscribe((jefatura) => {
          this.jefatura = jefatura;
          if (this.jefatura) {
            this.updateChatHeader();
          }
        });
    }
  }

  loadMessages() {
    const conversationId = this.getConversationId();
    this.messages = this.chatService.getMessages(conversationId);
  }

  sendMessage() {
    if (this.newMessage.trim() !== "") {
      const message: Message = {
        text: this.newMessage,
        type: "sent",
        sender: this.currentUser,
      };
      this.messages.push(message);
      const conversationId = this.getConversationId();
      this.chatService.saveMessage(conversationId, message);
      this.newMessage = "";
    }
  }

  private getConversationId(): string {
    // Normaliza los IDs
    const currentUserIdNormalized = this.currentUserId.toUpperCase();
    const destinatarioIdNormalized = this.destinatarioId.toUpperCase();

    // Ordena los IDs alfabéticamente
    const ids = [currentUserIdNormalized, destinatarioIdNormalized].sort();

    // Genera un string concatenado de los IDs
    return `${ids[0]}-${ids[1]}`;
  }

  close() {
    this.isModalActive = false;
    this.closeModal.emit();
    this.chatService.closeModal();
    this.destinatario = "";
    this.destinatarioId="";
    this.tesista = undefined;
    this.revisor = undefined;
    this.director = undefined;
    this.jefatura = undefined;
  }

  private updateChatHeader() {
    if (this.tesista) {
      this.chatHeader = `${this.tesista.nombre} ${this.tesista.apellidos}`;
    } else if (this.revisor) {
      this.chatHeader = `${this.revisor.nombre} ${this.revisor.apellidos}`;
    } else if (this.director) {
      this.chatHeader = `${this.director.nombre} ${this.director.apellidos}`;
    } else if (this.jefatura) {
      this.chatHeader = `${this.jefatura.nombre} ${this.jefatura.apellidos}`;
    }
  }
}