export class Tarea {
  public id: number;
  public actividad: string;
  public estado: string;
  public fecha: Date;

  constructor(id: number, actividad: string, estado: string, fecha: Date) {
    this.id = id;
    this.actividad = actividad;
    this.estado = estado;
    this.fecha = fecha;
  }
}
