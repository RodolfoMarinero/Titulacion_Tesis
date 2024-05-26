import { Component, Input, input } from "@angular/core";
import { ChatComponent } from "../chat/chat.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-detalle-revsar",
  standalone: true,
  imports: [ChatComponent, FormsModule, CommonModule],
  templateUrl: "./detalle-revsar.component.html",
  styleUrl: "./detalle-revsar.component.css",
})
export class DetalleRevsarComponent {
  @Input() id: string = "";
}
