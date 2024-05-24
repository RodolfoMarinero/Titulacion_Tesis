import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"], // Corrected to styleUrls
})
export class MenuComponent {
  constructor(private router: Router) {
    
  }
  isActive = false;
  isMenuVisible = false;

  toggleMenu() {
    this.isActive = !this.isActive;
    this.isMenuVisible = !this.isMenuVisible;
  }
  inicio() {
    this.router.navigate(["/home"]);
  }
}
