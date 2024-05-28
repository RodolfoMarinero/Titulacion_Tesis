export class Tarea {
  private _id: number;
  private _actividad: string;
  private _estado: string;
  private _fecha: Date;

  constructor(id: number, actividad: string, estado: string, fecha: Date) {
    this._id = id;
    this._actividad = actividad;
    this._estado = estado;
    this._fecha = fecha;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get actividad(): string {
    return this._actividad;
  }

  set actividad(value: string) {
    this._actividad = value;
  }

  get estado(): string {
    return this._estado;
  }

  set estado(value: string) {
    this._estado = value;
  }

  get fecha(): Date {
    return this._fecha;
  }

  set fecha(value: Date) {
    this._fecha = value;
  }
}
