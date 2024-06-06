
export class Protocolo {
  public matricula: string;
  public nombre: string;
  public apellidos: string;
  public carrera: string;
  public tituloTesis: string;
  public directorTesis: string;
  public codirectorTesis?: string;

  constructor(
    matricula: string,
    nombre: string,
    apellidos: string,
    carrera: string,
    tituloTesis: string,
    directorTesis: string,
    codirectorTesis?: string
  ) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.carrera = carrera;
    this.tituloTesis = tituloTesis;
    this.directorTesis = directorTesis;
    this.codirectorTesis = codirectorTesis;
  }

}
