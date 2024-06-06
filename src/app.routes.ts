import { Routes } from '@angular/router';
import { IniciarSesionComponent } from './app/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './app/inicio/inicio.component';
import { HomeComponent } from './app/home/home.component';
import { VistaRevisarTesisComponent } from './app/vista-revisar-tesis/vista-revisar-tesis.component';
import { TablaAlumnosComponent } from './app/tabla-alumnos/tabla-alumnos.component';
import { RegistrarTesistaComponent } from './app/registrar-tesista/registrar-tesista.component';
import { AsignarRevisoresComponent } from './app/asignar-revisores/asignar-revisores.component';
import { ProgresoComponent } from './app/progreso/progreso.component';
import { JefaturaComponent } from './app/jefatura/jefatura.component';
import { RevisionTesisComponent } from './app/revision-tesis/revision-tesis.component';

import { TablaRevisoresComponent } from './app/tabla-revisores/tabla-revisores.component';
import { DetalleRevsarComponent } from './app/detalle-revsar/detalle-revsar.component';
import { DirectorComponent } from './app/director/director.component';
export const routes: Routes = [
  { path: "", component: InicioComponent, pathMatch: "full" },
  { path: "inicioSesion", component: IniciarSesionComponent },
  { path: "home", component: HomeComponent },
  { path: "revisarTesis", component: RevisionTesisComponent },
  { path: "registrarTesista", component: RegistrarTesistaComponent },
  { path: "asignarRevisores", component: AsignarRevisoresComponent },
  { path: "progreso", component: ProgresoComponent },
  { path: "jefatura", component: JefaturaComponent },
  { path: "tabla", component: TablaAlumnosComponent },
  { path: "vistaRevisor", component: VistaRevisarTesisComponent },
  { path: "tablaRevisores", component: TablaRevisoresComponent },
  { path: "detallesTesis", component: DetalleRevsarComponent },
  { path: "director", component: DirectorComponent },
];

