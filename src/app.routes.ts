import { Routes } from '@angular/router';
import { IniciarSesionComponent } from './app/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './app/inicio/inicio.component';
import { HomeComponent } from './app/home/home.component';
import { VistaRevisarTesisComponent } from './app/vista-revisar-tesis/vista-revisar-tesis.component';

export const routes: Routes = [   
    { path: '', component: InicioComponent, pathMatch: 'full' },  
    { path: 'inicioSesion', component: IniciarSesionComponent },
    { path: 'home', component: HomeComponent },
    { path: 'revisarTesis', component: VistaRevisarTesisComponent },
];
