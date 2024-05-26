export class Tesista {
  public id!: number;
  public nombre: String = "";
  public tesis: string = "";
  public carrera: string = "";
  public notificacion: boolean = false;
  public revisores!: string[];
  constructor(
    id: number,
    nombre: String,
    tesis: string,
    carrera: string,
    notificaion: boolean
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tesis = tesis;
    this.carrera = carrera;
    this.notificacion = notificaion;
    this.revisores = [];
  }
}
