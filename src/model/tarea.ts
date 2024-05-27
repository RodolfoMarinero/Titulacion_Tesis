export class Tarea {
  public id: number;
  public actividad: String;
  public estado: String;
  fecha: Date;

  constructor(id: number, actividad: string, estado: string, fecha: Date) {
    this.id = id;
    this.actividad = actividad;
    this.estado = estado;
    this.fecha = fecha;
  }
}
