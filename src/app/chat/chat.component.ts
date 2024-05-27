import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BDChatService } from "../bd-chat.service";
import { ListaTesistas } from "../../model/listaTesistas";
import { Tesista } from "../../model/tesista";
import { Revisor } from "../../model/revisor";
import { BdTesistasService } from "../bd-tesistas.service";

interface Message {
  text: string;
  type: "sent" | "received";
}

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ChatComponent implements OnChanges {
  @Input() tesistaId!: String;
  @Input() revisor!: Revisor;
  public tesista: Tesista | null;
  public lista: ListaTesistas = new ListaTesistas();
  newMessage: string = "";
  messages: Message[] = [];
  showClearButton: boolean = false;

  constructor(
    private service: BdTesistasService,
    private chatService: BDChatService
  ) {
    this.tesista = service
      .getTesistas()
      .getTesistaById(Number(Number(this.tesistaId)));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["tesistaId"] || changes["revisorId"]) {
      this.loadMessages();
    }
  }

  loadMessages() {
    const conversationId = this.getConversationId();
    this.messages = this.chatService.getMessages(conversationId);
  }

  sendMessage() {
    if (this.newMessage.trim() !== "") {
      const message: Message = { text: this.newMessage, type: "sent" };
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
    return `${this.tesistaId}-${this.revisor.id}`;
  }
}
