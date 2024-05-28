import { Component } from '@angular/core';
import { Director } from '../../model/controlEscolar';
import { ListaDirectores } from '../../model/listaRevisores copy';
interface Message {
  text: string;
  type: "sent" | "received";
}
@Component({
  selector: 'app-chat-director',
  standalone: true,
  imports: [],
  templateUrl: './chat-director.component.html',
  styleUrl: './chat-director.component.css'
})
export class ChatDirectorComponent {
  @Input() directorId!: string;
  public director: Director | null = null;
  public lista: ListaDirectores = new ListaDirectores();
  newMessage: string = "";
  messages: Message[] = [];
  showClearButton: boolean = false;

  constructor(
    private service: BdTesistasService,
    private chatService: BDChatService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["tesistaMatricula"] || changes["revisorMatricula"]) {
      this.loadTesista();
      this.loadMessages();
    }
  }

  loadTesista() {
    this.tesista = this.service
      .getTesistas()
      .getTesistaByMatricula(this.tesistaMatricula);
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
    return `${this.tesistaMatricula}-${this.revisorMatricula}`;
  }
}