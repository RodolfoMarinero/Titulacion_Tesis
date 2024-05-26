import { Injectable } from '@angular/core';
interface Message {
  text: string;
  type: "sent" | "received";
}
@Injectable({
  providedIn: "root",
})
export class BDChatService {
  private storageKey = "chatMessages";

  getMessages(): Message[] {
    const messages = localStorage.getItem(this.storageKey);
    return messages ? JSON.parse(messages) : [];
  }

  saveMessage(message: Message): void {
    const messages = this.getMessages();
    messages.push(message);
    localStorage.setItem(this.storageKey, JSON.stringify(messages));
  }

  clearMessages(): void {
    localStorage.removeItem(this.storageKey);
  }
}
