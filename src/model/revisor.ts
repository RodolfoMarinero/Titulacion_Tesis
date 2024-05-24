export class Revisor {
  public _nombre: string;
  public _apellidos: string;
  public _area: string;
  public _universidad?: string; 

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

  // Getters
  get nombre(): string {
    return this._nombre;
  }

  get apellidos(): string {
    return this._apellidos;
  }

  get area(): string {
    return this._area;
  }

  get universidad(): string | undefined {
    return this._universidad;
  }

  // Setters
  set nombre(value: string) {
    this._nombre = value;
  }

  set apellidos(value: string) {
    this._apellidos = value;
  } 

  set area(value: string) {
    this._area = value;
  }

  set universidad(value: string | undefined) {
    this._universidad = value;
  }
}
