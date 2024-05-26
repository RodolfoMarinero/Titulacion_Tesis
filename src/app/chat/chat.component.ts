import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { BDChatService } from "../bd-chat.service";

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
export class ChatComponent {
  selectedRevisor: string = "Rodolfo";
  newMessage: string = "";
  messages: Message[] = [];

  constructor(private bdChat: BDChatService) {
    this.messages = this.bdChat.getMessages(); // Load messages on init
  }

  sendMessage() {
    if (this.newMessage.trim() !== "") {
      const message: Message = { text: this.newMessage, type: "sent" };
      this.messages.push(message);
      this.bdChat.saveMessage(message); // Save message to storage
      this.newMessage = "";
    }
  }

  clearChat() {
    this.messages = [];
    this.bdChat.clearMessages(); // Clear messages from storage
  }
}
