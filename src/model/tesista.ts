import { Revisor } from "./revisor";

export class Tesista {
  public matricula: string;
  public nombre: String;
  public tesis: String;
  public carrera: String ;
  public notificacion: boolean = false;
  public revisores: Revisor[] = [];
  
  constructor(
    matricula: string,
    nombre: String,
    tesis: String,
    carrera: String,
    notificaion: boolean,
    revisores:Revisor[]
  ) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.tesis = tesis;
    this.carrera = carrera;
    this.notificacion = notificaion;
    this.revisores=revisores;
  }
}
