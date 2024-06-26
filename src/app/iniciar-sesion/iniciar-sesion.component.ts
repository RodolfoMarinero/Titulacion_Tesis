import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { BdTesistasService } from "../../service/bd-tesistas.service";
import { BDRevisoresService } from "../../service/bd-revisores.service";
import { BDJefaturaService } from "../../service/bdjefatura.service";
import { ListaTesistas } from "../../model/listaTesistas";
import { ListaJefaturas } from "../../model/listaJefaturas";
import { ListaRevisores } from "../../model/listaRevisores";
import { BDDirectoresService } from "../../service/bddirectores.service";
import { ListaDirectores } from "../../model/listaDirectores";

@Component({
  selector: "app-iniciar-sesion",
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: "./iniciar-sesion.component.html",
  styleUrls: ["./iniciar-sesion.component.css"],
})
export class IniciarSesionComponent implements OnInit {
  loginForm: FormGroup;

  public listaTesistas: ListaTesistas = new ListaTesistas();
  public listaRevisores: ListaRevisores = new ListaRevisores();
  public listaJefaturas: ListaJefaturas = new ListaJefaturas();
  public listaDirectores: ListaDirectores = new ListaDirectores();

  constructor(
    private formBuilder: FormBuilder,
    private bdTesistasService: BdTesistasService,
    private bdRevisoresService: BDRevisoresService,
    private bdJefaturaService: BDJefaturaService,
    private bdDirectoresService: BDDirectoresService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.bdTesistasService.getUsers().subscribe((data) => {
      this.listaTesistas.tesistas = data;
    });
    this.bdRevisoresService.getUsers().subscribe((data) => {
      this.listaRevisores.revisores = data;
      //alert(this.listaRevisores.revisores.length);
    });
    this.bdJefaturaService.getUsers().subscribe((data) => {
      this.listaJefaturas.jefaturas = data;
    });
    this.bdDirectoresService.getUsers().subscribe((data) => {
      this.listaDirectores.directores = data;
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log("Form values:", { email, password });

      const tesista = this.listaTesistas.getTesistaByEmail(email);
      if (tesista) {
        alert(tesista.nombre);
      }
      const revisor = this.listaRevisores.getRevisorByEmail(email);
      if (revisor) {
        alert(revisor.nombre);
      }
      const jefatura = this.listaJefaturas.getJefaturaByEmail(email);
      if (jefatura) {
        alert(jefatura.nombre);
      }

      const director = this.listaDirectores.getDirectorByEmail(email);
      if (director) {
        alert(director.nombre);
      }

      if (tesista) {
        alert("es tesista");
        if (tesista.contrasena === password) {
          console.log("Tesista logueado correctamente");
          alert(tesista.nombre);
          this.router.navigate(["/progreso", tesista.matricula]);
        }
      } else if (revisor) {
        alert("es revisor");
        if (revisor.contrasena === password) {
          console.log("Revisor logueado correctamente");
        }
        this.router.navigate(["/vistaRevisor", revisor.matricula]);
      } else if (jefatura) {
        alert("jefatura");
        if (jefatura.contrasena === password) {
          console.log("Jefatura logueada correctamente");
        }
        this.router.navigate(["/jefatura", jefatura.carrera, jefatura.id]);
      } else if (director) {
        alert("director");
        if (director.contrasena === password) {
          console.log("Director logueado correctamente");
        }
        this.router.navigate(["/director",director.id]);
      }
      else {
        console.log("Credenciales incorrectas");
      }
    } else {
      console.log("Form is invalid");
    }
  }
}
