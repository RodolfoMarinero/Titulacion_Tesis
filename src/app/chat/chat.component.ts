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
import { BDChatService } from "../bd-chat.service";
import { Tesista } from "../../model/tesista";
import { BdTesistasService } from "../bd-tesistas.service";
import { BDRevisoresService } from "../bd-revisores.service";
import { Revisor } from "../../model/revisor";
import { BDDirectoresService } from "../bddirectores.service";
import { Director } from "../../model/director";
import { BDJefaturaService } from "../bdjefatura.service";
import { Jefatura } from "../../model/jefatura";

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
    }
  }

  open() {
    this.isModalActive = true;
  }

  loadParticipants() {
    this.tesista = this.serviceT
      .getTesistas()
      .getTesistaByMatricula(this.destinatarioId);

    if (this.destinatario === "revisor") {
      this.revisor = this.serviceR
        .getRevisores()
        .getRevisorByMatricula(this.destinatarioId);
    } else if (this.destinatario === "director") {
      this.director = this.serviceD
        .getDirectores()
        .getDirectorById(this.destinatarioId);
    } else if (this.destinatario === "jefatura") {
      this.jefatura = this.serviceJ
        .getJefaturas()
        .getJefaturaById(this.destinatarioId);
    }

    this.updateChatHeader();
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
    if (this.destinatario === "revisor") {
      this.chatHeader =
        this.revisor?.nombre + " " + this.revisor?.apellidos || "";
    } else if (this.destinatario === "director") {
      this.chatHeader =
        this.director?.nombre + " " + this.director?.apellidos || "";
    } else if (this.destinatario === "jefatura") {
      this.chatHeader =
        this.jefatura?.nombre + " " + this.jefatura?.apellidos || "";
    } else {
      this.chatHeader =
        this.tesista?.nombre + " " + this.tesista?.apellidos || "";
    }
  }
}
