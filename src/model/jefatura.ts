export class Jefatura {
  public id: string;
  public nombre: string;
  public apellidos: string;
  public carrera: string;
  public universidad: string;
  public email: string;

  // Constructor
  constructor(
    id: string,
    nombre: string,
    apellidos: string,
    carrera: string,
    universidad: string,
    email:string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.carrera = carrera;
    this.universidad = universidad;
    this.email = email;
  }
}
}w
