import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { BdTesistasService } from "../bd-tesistas.service";
import { Tesista } from "../../model/tesista";
import { ListaTesistas } from "../../model/listaTesistas";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { CommonModule } from "@angular/common";
import { BdProtocolosService } from "../bd-protocolos.service";
import { Protocolo } from "../../model/protocolo";
import { ListaProtocolos } from "../../model/listaProtocolos";

@Component({
  selector: "app-registrar-tesista",
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NavMenuComponent, CommonModule],
  templateUrl: "./registrar-tesista.component.html",
  styleUrl: "./registrar-tesista.component.css",
})
export class RegistrarTesistaComponent {
  @ViewChild("selectorCampus") selectorCampus!: ElementRef;
  @ViewChild("campus1") campus1!: ElementRef;
  @ViewChild("campus2") campus2!: ElementRef;

public listaTesistas = new ListaTesistas;
public listaProtocolos = new ListaProtocolos;
  constructor(
    private renderer: Renderer2,
    private bdTesistasService: BdTesistasService,
    private bdProtocolosService: BdProtocolosService,
    private router:Router
  ) {
    
    this.lista = this.bdTesistasService.getTesistas();
    
  }

  ngOnInit(): void {}

  registrarTesista(): void {
         
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls["contrasena"].value;
    const confirmPass = group.controls["confirmarContrasena"].value;
    return pass === confirmPass ? null : { notSame: true };
  }

  cargarLocal() {
    // Crear instancias de Protocolos con datos de prueba
    let protocolo1 = new Protocolo(
      "123456",
      "Juan",
      "Pérez",
      "Ingeniería Informática",
      "Desarrollo de una aplicación web",
      "Dr. Antonio Gómez",
      "Br. Panfilo Lopez"
    );

    let protocolo2 = new Protocolo(
      "987654",
      "María",
      "González",
      "Ciencias de la Computación",
      "Inteligencia Artificial",
      "Dr. Roberto Martínez",
      "Dr. Sacramento Pitalua"
    );

    let protocolo3 = new Protocolo(
      "456789",
      "Pedro",
      "López",
      "Ingeniería Eléctrica",
      "Diseño de un sistema de control automático",
      "Dr. Alejandro Pérez",
      "DR. Calixto"
    );


    // Agregar los tesistas a la lista
    this.listaProtocolos.agregar(protocolo1);
    this.listaProtocolos.agregar(protocolo2);
    this.listaProtocolos.agregar(protocolo3);
    
    this.bdProtocolosService.setProtocolos(this.listaProtocolos);
  }
}
