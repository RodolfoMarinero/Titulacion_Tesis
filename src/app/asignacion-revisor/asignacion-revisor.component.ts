import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Tesista } from '../../model/tesista';
import { Revisor } from '../../model/revisor';
import { BdTesistasService } from '../bd-tesistas.service';
import { BDRevisoresService } from '../bd-revisores.service';
import { BDChatService } from '../bd-chat.service';

@Component({
  selector: 'app-asignacion-revisor',
  standalone: true,
  imports: [],
  templateUrl: './asignacion-revisor.component.html',
  styleUrl: './asignacion-revisor.component.css'
})
export class AsignacionRevisorComponent {
  @Input() destinatarioId!: string;
  @Input() currentUser!: string;
  @Input() currentUserId!: string;

  public tesista!: Tesista;
  public revisor!: Revisor;
  isModalActive: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  constructor(
    private serviceT: BdTesistasService,
    private serviceR: BDRevisoresService,
    private chatService: BDChatService
  ) {
    this.chatService.modalVisibility$.subscribe((isVisible: boolean) => {
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
    }
  }

  open() {
    this.isModalActive = true;
  }

  loadParticipants() {
    this.tesista = this.serviceT
      .getTesistas()
      .getTesistaByMatricula(this.destinatarioId);

      this.revisor = this.serviceR
      .getRevisores()
      .getRevisorByMatricula(this.destinatarioId);
     

    
  }

 /* loadMessages() {
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
*/
  

  close() {
    this.isModalActive = false;
    this.closeModal.emit();
    this.chatService.closeModal();
  }

  
}

