//import { ListaTesistas } from "./listaTesistas";

export class Revisor {
  public matricula: string;
  public nombre: string;
  public apellidos: string;
  public area: string;
  public universidad: string;
  public correoElectronico: string;
  public contrasena: string;
  public notificacion: boolean;

  constructor(
    matricula: string,
    nombre: string,
    apellidos: string,
    area: string,
    universidad: string,
    correoElectronico: string,
    contrasena: string,
    notificacion: boolean
  ) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.area = area;
    this.universidad = universidad;
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
    this.notificacion = notificacion;
  }
}
