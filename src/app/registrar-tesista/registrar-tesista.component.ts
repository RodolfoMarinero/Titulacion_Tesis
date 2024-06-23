import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { Tesista } from "../../model/tesista";
import { ListaTesistas } from "../../model/listaTesistas";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { CommonModule } from "@angular/common";
import { BdProtocolosService } from "../../service/bd-protocolos.service";
import { Protocolo } from "../../model/protocolo";
import { ListaProtocolos } from "../../model/listaProtocolos";
import { Tarea } from "../../model/tarea";

@Component({
  selector: "app-registrar-tesista",
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NavMenuComponent, CommonModule],
  templateUrl: "./registrar-tesista.component.html",
  styleUrls: ["./registrar-tesista.component.css"],
})
export class RegistrarTesistaComponent {
  @ViewChild("selectorCampus") selectorCampus!: ElementRef;
  @ViewChild("campus1") campus1!: ElementRef;
  @ViewChild("campus2") campus2!: ElementRef;

  public listaTesistas = new ListaTesistas();
  public listaProtocolos = new ListaProtocolos();
  public registroForm!: FormGroup;

  constructor(
    private renderer: Renderer2,
    private bdTesistasService: BdTesistasService,
    private bdProtocolosService: BdProtocolosService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registroForm = this.fb.group({
      matricula: [''],
      nombre: [''],
      apellidos: [''],
      carrera: [''],
      tituloTesis: [''],
      directorTesis: [''],
      codirectorTesis: [''],
      fechaInicio: ['',Validators.required],
      fechaFinal: ['',Validators.required],
      correoElectronico: ['', Validators.required],
      contrasena: ['', Validators.required],
      confirmarContrasena: ['', Validators.required],
      email: [''],
    });
  }

  ngOnInit(): void {
    this.bdTesistasService.getUsers().subscribe((data) => {
      this.listaTesistas.tesistas = data;
    });
    this.bdProtocolosService.getUsers().subscribe((data) => {
      this.listaProtocolos.protocolos = data;
    });
  }

  registrarTesista(): void {
     const nuevoTesista: Tesista = new Tesista(
       this.registroForm.value.matricula,
       this.registroForm.value.nombre,
       this.registroForm.value.apellidos,
       this.registroForm.value.carrera,
       this.registroForm.value.tituloTesis,
       this.registroForm.value.directorTesis,
       this.registroForm.value.fechaInicio.toString(),
       this.registroForm.value.fechaFinal.toString(),
       this.registroForm.value.correoElectronico,
       this.registroForm.value.contrasena,
       false,
       "",
       "",
       this.registroForm.value.codirectorTesis
     );
     alert(nuevoTesista.nombre+" "+nuevoTesista.directorTesis+" "+this.registroForm.value.fechaInicio.toString());
     const matricula = this.registroForm.value.matricula;
    this.bdProtocolosService.deleteProtocolo(matricula).subscribe(data => {
      alert("Alumno Eliminado");
    });
    // Agregar el nuevo tesista
    this.bdTesistasService.createTesista(nuevoTesista).subscribe(data => {
      alert("Tesista agregado");
    });
    alert("Tesista agregado");
    this.registroForm.reset();
    
    
    /*const listaProtocolos = this.bdProtocolosService.getProtocolos();
    const index = listaProtocolos.protocolos.findIndex(protocolo => protocolo.matricula === matricula);
    if (index !== -1) {
      listaProtocolos.protocolos.splice(index, 1);
      this.bdProtocolosService.setProtocolos(listaProtocolos);
    }*/
  }

  cargarDatos(event: any) {
    const matriculaSeleccionada = event.target.value;

    // Buscar el protocolo correspondiente a la matrícula seleccionada
    const protocoloSeleccionado = this.listaProtocolos.protocolos.find(
      (protocolo: Protocolo) => protocolo.matricula === matriculaSeleccionada
    );

    if (protocoloSeleccionado) {
      // Rellenar el formulario con los datos del protocolo seleccionado
      this.registroForm.patchValue({
        matricula: protocoloSeleccionado.matricula,
        nombre: protocoloSeleccionado.nombre,
        apellidos: protocoloSeleccionado.apellidos,
        carrera: protocoloSeleccionado.carrera,
        tituloTesis: protocoloSeleccionado.tituloTesis,
        directorTesis: protocoloSeleccionado.directorTesis,
        codirectorTesis: protocoloSeleccionado.codirectorTesis,
        correoElectronico: '', // Suponiendo que no hay email en Protocolo, puedes ajustar esto si es necesario
        contrasena: '',       // Suponiendo que no hay contrasena en Protocolo
        confirmarContrasena: '', // Suponiendo que no hay confirmarContrasena en Protocolo
      });
    }
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls["contrasena"].value;
    const confirmPass = group.controls["confirmarContrasena"].value;
    return pass === confirmPass ? null : { notSame: true };
  }

  /*cargarLocal() {
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
  }*/
}
