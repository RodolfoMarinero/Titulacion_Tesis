import { Component, Input, input } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-detalle-revsar',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './detalle-revsar.component.html',
  styleUrl: './detalle-revsar.component.css'
})
export class DetalleRevsarComponent {
  @Input() id:string='';
}
