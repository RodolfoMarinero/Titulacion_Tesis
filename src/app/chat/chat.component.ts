import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
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
  
  public tesista!: Tesista;
  public revisor!: Revisor;
  public director!: Director;
  public jefatura!: Jefatura;
  isModalActive: boolean = false;
  newMessage: string = "";
  messages: Message[] = [];
  showClearButton: boolean = false;
  chatHeader: string = "";
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
      alert("destinatario " + this.destinatarioId);
    }
  }

  open() {
    this.isModalActive = true;
  }

  loadParticipants() {
    // Obtener tesista
    
    this.serviceT.getUsers().subscribe((users) => {
      this.tesista != users.find(
        (user) => user.matricula === this.destinatarioId
      );
      if (this.tesista) {
        alert("tesista " + this.tesista.matricula);
        this.updateChatHeader();
      }
    });

    // Obtener revisor
    if (this.destinatario === "revisor") {
      this.serviceR.getUsers().subscribe((users) => {
        this.revisor != users.find(
          (user) => user.matricula === this.destinatarioId
        );
        if (this.revisor) {
          this.updateChatHeader();
        }
      });
    }

    // Obtener director
    else if (this.destinatario === "director") {
      this.serviceD.getUsers().subscribe((users) => {
        this.director != users.find((user) => user.id === this.destinatarioId);
        if (this.director) {
          this.updateChatHeader();
        }
      });
    }

    // Obtener jefatura
    else if (this.destinatario === "jefatura") {
      this.serviceJ.getUsers().subscribe((users) => {
        this.jefatura != users.find((user) => user.id === this.destinatarioId);
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
  /*
  clearChat() {
    this.messages = [];
    const conversationId = this.getConversationId();
    this.chatService.clearMessages(conversationId);
  }

  toggleClearButton() {
    this.showClearButton = !this.showClearButton;
  }
*/
  private getConversationId(): string {
    const ids = [this.currentUserId, this.destinatarioId].sort();
    return `${ids[0]}-${ids[1]}`;
  }

  close() {
    this.isModalActive = false;
    this.closeModal.emit();
    this.chatService.closeModal();
  }

  private updateChatHeader() {
    this.chatHeader =
      this.tesista?.nombre + " " + this.tesista?.apellidos || "";
    alert("actualiza");
    if (this.destinatario === "revisor") {
      this.chatHeader =
        this.revisor?.nombre + " " + this.revisor?.apellidos || "";
    } else if (this.destinatario === "director") {
      this.chatHeader =
        this.director?.nombre + " " + this.director?.apellidos || "";
    } else if (this.destinatario === "jefatura") {
      this.chatHeader =
        this.jefatura?.nombre + " " + this.jefatura?.apellidos || "";
    } 
  }
}
