import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BDChatService } from "../bd-chat.service";
import { ListaTesistas } from "../../model/listaTesistas";
import { Tesista } from "../../model/tesista";
import { BdTesistasService } from "../bd-tesistas.service";
import { BDRevisoresService } from "../bd-revisores.service";
import { Revisor } from "../../model/revisor";

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
  @Input() currentUser!: string;
  public tesista: Tesista | null = null;
  public revisor: Revisor | null = null;
  public listaT: ListaTesistas = new ListaTesistas();
  newMessage: string = "";
  messages: Message[] = [];
  showClearButton: boolean = false;
  chatHeader: string = "";

  constructor(
    private serviceT: BdTesistasService,
    private serviceR: BDRevisoresService,
    private chatService: BDChatService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["tesistaMatricula"] || changes["revisorMatricula"]) {
      this.loadTesista();
      this.loadRevisor();
      this.loadMessages();
    }
  }

  loadTesista() {
    this.tesista = this.serviceT
      .getTesistas()
      .getTesistaByMatricula(this.tesistaMatricula);
    this.updateChatHeader();
  }

  loadRevisor() {
    this.revisor = this.serviceR
      .getRevisores()
      .getRevisorByMatricula(this.revisorMatricula);
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
    return `${this.tesistaMatricula}-${this.revisorMatricula}`;
  }

  private updateChatHeader() {
    if (this.tesista || this.revisor) {
      this.chatHeader =
        this.currentUser === "revisor"
          ? this.tesista?.nombre || ""
          : this.revisor?.nombre || "";
    }
  }
}
