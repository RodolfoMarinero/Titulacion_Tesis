import { Component } from '@angular/core';
import { TablaAlumnosComponent } from '../tabla-alumnos/tabla-alumnos.component';
import { DetalleRevsarComponent } from '../detalle-revsar/detalle-revsar.component';
import { HeaderRevisionComponent } from '../header-revision/header-revision.component';
import { RevisionTesisComponent } from '../revision-tesis/revision-tesis.component';

@Component({
  selector: 'app-vista-revisar-tesis',
  standalone: true,
  imports: [TablaAlumnosComponent, DetalleRevsarComponent,RevisionTesisComponent],
  templateUrl: './vista-revisar-tesis.component.html',
  styleUrl: './vista-revisar-tesis.component.css',
})
export class VistaRevisarTesisComponent {
  valueResponse(respuesta: boolean) {
    alert(respuesta);
  }
  public flag:boolean=true;
  public handleFlagChange(flagValue: boolean) {
    this.flag=flagValue
    console.log('Nuevo valor de flag:', flagValue);
  }
  public volver(){
    this.handleFlagChange(false);
  }
}
