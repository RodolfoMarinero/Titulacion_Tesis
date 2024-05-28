import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BdTesistasService } from "../bd-tesistas.service";
import { Tesista } from "../../model/tesista";

@Component({
  selector: "app-registrar-tesista",
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: "./registrar-tesista.component.html",
  styleUrl: "./registrar-tesista.component.css",
})
export class RegistrarTesistaComponent {
  @ViewChild("selectorCampus") selectorCampus!: ElementRef;
  @ViewChild("campus1") campus1!: ElementRef;
  @ViewChild("campus2") campus2!: ElementRef;

  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
    private bdTesistasService: BdTesistasService
  ) {
    this.registroForm = this.fb.group(
      {
        matricula: ["", Validators.required],
        nombre: ["", Validators.required],
        apellidos: ["", Validators.required],
        campus: ["", Validators.required],
        carrera: ["", Validators.required],
        tituloTesis: ["", Validators.required],
        directorTesis: ["", Validators.required],
        codirectorTesis: [""],
        correoElectronico: ["", [Validators.required, Validators.email]],
        contrasena: ["", [Validators.required, Validators.minLength(6)]],
        confirmarContrasena: ["", Validators.required],
      },
      { validator: this.checkPasswords }
    );
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.renderer.listen(this.selectorCampus.nativeElement, "change", () => {
      const seleccionado = this.selectorCampus.nativeElement.value;
      this.renderer.setStyle(this.campus1.nativeElement, "display", "none");
      this.renderer.setStyle(this.campus2.nativeElement, "display", "none");
      if (seleccionado === "campus1") {
        this.renderer.setStyle(this.campus1.nativeElement, "display", "block");
      } else if (seleccionado === "campus2") {
        this.renderer.setStyle(this.campus2.nativeElement, "display", "block");
      }
    });
  }

  registrarTesista(): void {
    if (this.registroForm.valid) {
      const formValues = this.registroForm.value;
      console.log("Datos del formulario:", formValues);
      // Lógica para manejar el envío del formulario, como llamar a un servicio
      let tesista = new Tesista(
        this.registroForm.get("matricula")!.value,
        this.registroForm.get("nombre")!.value,
        this.registroForm.get("apellidos")!.value,
        this.registroForm.get("carrera")!.value,
        this.registroForm.get("tituloTesis")!.value,
        this.registroForm.get("directorTesis")!.value,
        this.registroForm.get("correoElectronico")!.value,
        this.registroForm.get("contrasena")!.value,
        false,
        this.registroForm.get("codirectorTesis")!.value
      );
      this.bdTesistasService.agregarTesista(tesista);
    } else {
      console.log("El formulario es inválido");
    }
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls["contrasena"].value;
    const confirmPass = group.controls["confirmarContrasena"].value;
    return pass === confirmPass ? null : { notSame: true };
  }
}
