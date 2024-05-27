import { Revisor } from "./revisor";

export class Tesista {
  public id!: number;
  public nombre: String;
  public tesis: String;
  public carrera: String ;
  public notificacion: boolean = false;
  public revisores: Revisor[] = [];
  
  constructor(
    id: number,
    nombre: String,
    tesis: String,
    carrera: String,
    notificaion: boolean,
    revisores:Revisor[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tesis = tesis;
    this.carrera = carrera;
    this.notificacion = notificaion;
    this.revisores=revisores;
  }
}
