export class JefeDeCarrera {
  private _nombre: string;
  private _apellidos: string;
  private _area: string;
  private _universidad?: string;

  // Constructor
  constructor(
    nombre: string,
    apellidos: string,
    area: string,
    universidad?: string
  ) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._area = area;
    this._universidad = universidad;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get apellidos(): string {
    return this._apellidos;
  }

  set apellidos(value: string) {
    this._apellidos = value;
  }

  get area(): string {
    return this._area;
  }

  set area(value: string) {
    this._area = value;
  }

  get universidad(): string | undefined {
    return this._universidad;
  }

  set universidad(value: string | undefined) {
    this._universidad = value;
  }
}
