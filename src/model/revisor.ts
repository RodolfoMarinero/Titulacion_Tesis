import { ListaTesistas } from "./listaTesistas";

export class Revisor {
  public matricula!: string;
  public nombre!: string;
  public apellidos!: string;
  public area!: string;
  public universidad!: string;
  public tesistas!: ListaTesistas;

  // Constructor
  constructor(
    matricula: string,
    nombre: string,
    apellidos: string,
    area: string,
    universidad: string,
    tesistas:ListaTesistas
  ) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.area = area;
    this.universidad = universidad;
    this.tesistas = tesistas; 
  }
}
