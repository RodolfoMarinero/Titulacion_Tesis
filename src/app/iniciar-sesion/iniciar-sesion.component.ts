import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; // Import FormGroup
import { BdTesistasService } from '../../service/bd-tesistas.service';
import { BdProtocolosService } from '../../service/bd-protocolos.service';
import { BDRevisoresService } from '../../service/bd-revisores.service';
import { BDJefaturaService } from '../../service/bdjefatura.service';
import { ListaTesistas } from '../../model/listaTesistas';
import { ListaJefaturas } from '../../model/listaJefaturas';
import { ListaRevisores } from '../../model/listaRevisores';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  loginForm: FormGroup;
  
  public listaTesistas: ListaTesistas=new ListaTesistas();
  public listaRevisores: ListaRevisores=new ListaRevisores();
  public listaJefaturas: ListaJefaturas=new ListaJefaturas();


  constructor(private formBuilder: FormBuilder,
    private bdTesistasService: BdTesistasService,
    private bdRevisoresService: BDRevisoresService,
    private bdJefaturaService: BDJefaturaService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.bdTesistasService.getUsers().subscribe((data) => {
      this.listaTesistas.tesistas = data;
    });
    this.bdRevisoresService.getUsers().subscribe((data) => {
      this.listaRevisores.revisores = data;
    });
    this.bdJefaturaService.getUsers().subscribe((data) => {
      this.listaJefaturas.jefaturas = data;
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      console.log('Form values:', formValues);
      // Aquí puedes agregar la lógica para enviar los datos al servidor
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      const tesista = this.listaTesistas.getTesistaByEmail(email);
      const revisor = this.listaRevisores.getRevisorByEmail(email);
      const jefatura = this.listaJefaturas.getJefaturaByEmail(email);
      alert(this.listaJefaturas.jefaturas);
      if (jefatura) {
        alert(jefatura.carrera);
      } else {
        console.log('Jefatura not found');
      }
      if (tesista && tesista.contrasena === password) {
        console.log('Tesista logueado correctamente');
      } else if (revisor && revisor.contrasena === password) {
        console.log('Revisor logueado correctamente');
      } else if (jefatura && jefatura.contrasena === password) {
        this.router.navigate(['/jefatura', jefatura.carrera]); 
        console.log('Jefatura logueada correctamente');
      } else {
        console.log('Credenciales incorrectas');
      }

      
    } else {
      console.log('Form is invalid');
    }
  }
}