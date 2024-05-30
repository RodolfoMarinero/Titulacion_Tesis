import { ListaTesistas } from "./listaTesistas";

export class Revisor {
  public matricula: string;
  public nombre: string;
  public apellidos: string;
  public area: string;
  public universidad: string;
 

  constructor(
    matricula: string,
    nombre: string,
    apellidos: string,
    area: string,
    universidad: string,
   
  ) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.area = area;
    this.universidad = universidad;
   
  }

}
