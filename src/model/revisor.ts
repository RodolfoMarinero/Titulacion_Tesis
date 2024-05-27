export class Revisor {
  public id: number;
  public nombre: string;
  public apellidos: string;
  public area: string;
  public universidad?: string;
  public tesistas: string[];

  // Constructor
  constructor(
    id: number,
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
    this.tesistas = []; 
  }
}
