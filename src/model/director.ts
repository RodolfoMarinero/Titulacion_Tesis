import { ListaTesistas } from "./listaTesistas";

export class Director {
  public id: string;
  public nombre: string;
  public apellidos: string;
  public area: string;
  public universidad?: string;
  

  // Constructor
  constructor(
    id:string,
    nombre: string,
    apellidos: string,
    area: string,
    universidad?: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.area = area;
    this.universidad = universidad;
   
  }

}
