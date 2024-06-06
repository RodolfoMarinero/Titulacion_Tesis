import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import "zone.js";
import { InicioComponent } from "./app/inicio/inicio.component";
import { RouterModule, provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ChatComponent } from "./app/chat/chat.component";

@Component({
  selector: "app-root",
  imports: [
    InicioComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ChatComponent,
    FormsModule,
    
  ],
  standalone: true,
  templateUrl: "main.html",
})
export class App {
  name = "Angular";
}

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(withFetch())],
});
