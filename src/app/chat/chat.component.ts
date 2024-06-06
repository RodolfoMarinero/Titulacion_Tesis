import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BDChatService } from "../bd-chat.service";
import { ListaTesistas } from "../../model/listaTesistas";
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
  @Input() tesistaMatricula!: string;
  @Input() revisorMatricula!: string;
  @Input() directorId!: string;
  @Input() coDirectorId?: string;
  @Input() jefaturaId!: string;
  @Input() currentUser!: string;

  public tesista!: Tesista;
  public revisor!: Revisor;
  public director!: Director;
  public jefatura!: Jefatura;
  public listaT: ListaTesistas = new ListaTesistas();
  newMessage: string = "";
  messages: Message[] = [];
  showClearButton: boolean = false;
  chatHeader: string = "";
  destinatarioTipo!: string; // Agregar esta propiedad

  constructor(
    private serviceT: BdTesistasService,
    private serviceR: BDRevisoresService,
    private serviceD: BDDirectoresService,
    private serviceJ: BDJefaturaService,
    private chatService: BDChatService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes["tesistaMatricula"] ||
      changes["revisorMatricula"] ||
      changes["directorId"] ||
      changes["jefaturaId"] ||
      changes["currentUser"] ||
      changes["destinatarioTipo"] // Detectar cambios en el tipo de destinatario
    ) {
      this.loadParticipants();
      this.loadMessages();
    }
  }

  loadParticipants() {
    this.tesista = this.serviceT
      .getTesistas()
      .getTesistaByMatricula(this.tesistaMatricula);

    if (this.destinatarioTipo === "revisor") {
      this.revisor = this.serviceR
        .getRevisores()
        .getRevisorByMatricula(this.revisorMatricula);
    } else if (this.destinatarioTipo === "director") {
      this.director = this.serviceD
        .getDirectores()
        .getDirectorById(this.directorId);
    } else if (this.destinatarioTipo === "jefatura") {
      this.jefatura = this.serviceJ
        .getJefaturas()
        .getJefaturaById(this.jefaturaId);
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

  clearChat() {
    this.messages = [];
    const conversationId = this.getConversationId();
    this.chatService.clearMessages(conversationId);
  }

  toggleClearButton() {
    this.showClearButton = !this.showClearButton;
  }

  private getConversationId(): string {
    if (this.destinatarioTipo === "revisor") {
      return `${this.tesistaMatricula}-${this.revisorMatricula}`;
    } else if (this.destinatarioTipo === "director") {
      return `${this.tesistaMatricula}-${this.directorId}`;
    } else if (this.destinatarioTipo === "jefatura") {
      return `${this.tesistaMatricula}-${this.jefaturaId}`;
    } else {
      return ""; // Handle other cases as needed
    }
  }

  private updateChatHeader() {
    if (this.tesista) {
      if (this.currentUser === "tesista") {
        if (this.destinatarioTipo === "revisor") {
          this.chatHeader = this.revisor?.nombre || "";
        } else if (this.destinatarioTipo === "director") {
          this.chatHeader = this.director?.nombre || "";
        } else if (this.destinatarioTipo === "jefatura") {
          this.chatHeader = this.jefatura?.nombre || "";
        }
      } else if (this.currentUser === "revisor") {
        this.chatHeader = this.tesista?.nombre || "";
      } else if (this.currentUser === "director") {
        this.chatHeader = this.tesista?.nombre || "";
      } else if (this.currentUser === "jefatura") {
        if (this.destinatarioTipo === "tesista") {
          this.chatHeader = this.tesista?.nombre || "";
        } else if (this.destinatarioTipo === "revisor") {
          this.chatHeader = this.revisor?.nombre || "";
        } else if (this.destinatarioTipo === "director") {
          this.chatHeader = this.director?.nombre || "";
        }
      }
    }
  }
}
