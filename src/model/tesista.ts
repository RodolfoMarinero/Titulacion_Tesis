import { ListaTareas } from "./listaTareas";

export class Tesista {
  public matricula: string;
  public nombre: string;
  public apellidos: string;
  public carrera: string;
  public tituloTesis: string;
  public directorTesis: string;
  public codirectorTesis?: string;
  public fechaInicio: Date;
  public fechaFinal: Date;
  public correoElectronico: string;
  public contrasena: string;
  public notificacion?: boolean;
  public revisor1?: string;
  public revisor2?: string;
  public tareas?: ListaTareas;

  constructor(
    matricula: string,
    nombre: string,
    apellidos: string,
    carrera: string,
    tituloTesis: string,
    directorTesis: string,
    fechaInicio: Date,
    fechaFinal: Date,
    correoElectronico: string,
    contrasena: string,
    notificacion: boolean = false,
    revisor1?: string,
    revisor2?: string,
    codirectorTesis?: string,
    tareas?: ListaTareas
  ) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.carrera = carrera;
    this.tituloTesis = tituloTesis;
    this.directorTesis = directorTesis;
    this.fechaInicio = fechaInicio;
    this.fechaFinal = fechaFinal;
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
    this.notificacion = notificacion;
    this.codirectorTesis = codirectorTesis;
    this.revisor1 = revisor1;
    this.revisor2 = revisor2;
    this.tareas = tareas;
  }

}
