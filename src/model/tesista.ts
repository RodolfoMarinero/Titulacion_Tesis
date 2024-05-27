import { ListaRevisores } from "./listaRevisores";
import { ListaTareas } from "./listaTareas";
import { Revisor } from "./revisor";

export class Tesista {
  public matricula: string;
  public nombre: String;
  public apellidos: string;
  public carrera: String ;
  public tituloTesis: String;
  public directorTesis: string;
  public codirectorTesis: string;
  public correoElectronico: string;
  public contrasena: string;
  public notificacion: boolean = false;
  public revisor1!: string;
  public revisor2!: String;
  public tareas!: ListaTareas;

  constructor(
    matricula: string,
    nombre: String,
    apellidos:string,
    carrera: String,
    tituloTesis:string,
    directorTesis: string,
    codirectorTesis: string,
    correoElectronico: string,
    contrasena: string,
    notificaion: boolean
  ) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.carrera = carrera;
    this.tituloTesis = tituloTesis;
    this.directorTesis = directorTesis;
    this.codirectorTesis = codirectorTesis;
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
    this.notificacion = notificaion;
  }
}
