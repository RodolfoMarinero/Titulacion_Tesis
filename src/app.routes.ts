import { Routes } from '@angular/router';
import { IniciarSesionComponent } from './app/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './app/inicio/inicio.component';
import { HomeComponent } from './app/home/home.component';
//import { VistaRevisarTesisComponent } from './app/vista-revisar-tesis/vista-revisar-tesis.component';
import { TablaAlumnosComponent } from './app/tabla-alumnos/tabla-alumnos.component';
import { RegistrarTesistaComponent } from './app/registrar-tesista/registrar-tesista.component';
import { AsignarRevisoresComponent } from './app/asignar-revisores/asignar-revisores.component';
import { ProgresoComponent } from './app/progreso/progreso.component';
import { JefaturaComponent } from './app/jefatura/jefatura.component';
import { RevisionTesisComponent } from './app/revision-tesis/revision-tesis.component'; 
import { TablaRevisoresComponent } from './app/tabla-revisores/tabla-revisores.component';
import { DetalleRevsarComponent } from './app/detalle-revsar/detalle-revsar.component';
import { DirectorComponent } from './app/director/director.component';
import { AlumnoComponent } from './app/alumno/alumno.component';
import { TaskListComponent } from './app/task-list/task-list.component';
import { VistaRevisarTesisComponent } from './app/vista-revisor/vista-revisar-tesis.component';
import { FeedbackComponent } from './app/feedback/feedback.component';
export const routes: Routes = [
  { path: "", component: InicioComponent, pathMatch: "full" },
  { path: "inicioSesion", component: IniciarSesionComponent },
  { path: "home", component: HomeComponent },
  { path: "revisarTesis", component: RevisionTesisComponent },
  { path: "registrarTesista", component: RegistrarTesistaComponent },
  { path: "asignarRevisores", component: AsignarRevisoresComponent },
  { path: "progreso/:matriculaT", component: ProgresoComponent },
  { path: "jefatura/:carrera/:matriculaJ", component: JefaturaComponent },
  { path: "tesis/:revisorid/:tesistaid/:url", component: FeedbackComponent },
  { path: "tabla", component: TablaAlumnosComponent },
  { path: "vistaRevisor/:matriculaR", component: VistaRevisarTesisComponent },
  { path: "tablaRevisores", component: TablaRevisoresComponent },
  { path: "detallesTesis", component: DetalleRevsarComponent },
  { path: "director/:matriculaD", component: DirectorComponent },
  { path: "alumno", component: AlumnoComponent },
];

