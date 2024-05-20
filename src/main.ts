import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { InicioComponent } from './app/inicio/inicio.component';

@Component({
  selector: 'app-root',
  imports: [InicioComponent],
  standalone: true,
  template: `
  <app-inicio></app-inicio>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
