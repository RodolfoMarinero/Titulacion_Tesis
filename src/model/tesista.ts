import { ListaRevisores } from "./listaRevisores";
import { ListaTareas } from "./listaTareas";
import { Revisor } from "./revisor";

export class Tesista {
  public matricula!: string;
  public nombre!: String;
  public tesis!: String;
  public carrera!: String;
  public notificacion: boolean = false;
  public revisores!: ListaRevisores;
  public tareas!: ListaTareas;

  constructor(
    matricula: string,
    nombre: String,
    tesis: String,
    carrera: String,
    notificaion: boolean,
    revisores: ListaRevisores,
    tareas: ListaTareas
  ) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.tesis = tesis;
    this.carrera = carrera;
    this.notificacion = notificaion;
    this.revisores = revisores;
    this.tareas = tareas;
  }
}
