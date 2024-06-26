import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface Message {
  text: string;
  type: "sent" | "received";
  sender: string; // Nuevo campo para identificar el remitente
}

@Injectable({
  providedIn: "root",
})
export class BDChatService {
  private storageKey = "chatConversations";
  private modalVisibility = new BehaviorSubject<boolean>(false);
  modalVisibility$ = this.modalVisibility.asObservable();

  getMessages(conversationId: string): Message[] {
    const conversations = this.getConversations();
    return conversations[conversationId] || [];
  }

  saveMessage(conversationId: string, message: Message): void {
    const conversations = this.getConversations();
    if (!conversations[conversationId]) {
      conversations[conversationId] = [];
    }
    conversations[conversationId].push(message);
    localStorage.setItem(this.storageKey, JSON.stringify(conversations));
  }

  clearMessages(conversationId: string): void {
    const conversations = this.getConversations();
    delete conversations[conversationId];
    localStorage.setItem(this.storageKey, JSON.stringify(conversations));
  }

  private getConversations(): { [key: string]: Message[] } {
    const conversations = localStorage.getItem(this.storageKey);
    return conversations ? JSON.parse(conversations) : {};
  }

  openModal() {
    this.modalVisibility.next(true);
  }

  closeModal() {
    this.modalVisibility.next(false);
  }
}
