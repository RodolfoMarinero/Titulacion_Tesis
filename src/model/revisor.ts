import { ListaTesistas } from "./listaTesistas";

export class Revisor {
  private _matricula: string;
  private _nombre: string;
  private _apellidos: string;
  private _area: string;
  private _universidad: string;
  private _tesistas: ListaTesistas;

  constructor(
    matricula: string,
    nombre: string,
    apellidos: string,
    area: string,
    universidad: string,
    tesistas: ListaTesistas
  ) {
    this._matricula = matricula;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._area = area;
    this._universidad = universidad;
    this._tesistas = tesistas;
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
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

  get universidad(): string {
    return this._universidad;
  }

  set universidad(value: string) {
    this._universidad = value;
  }

  get tesistas(): ListaTesistas {
    return this._tesistas;
  }

  set tesistas(value: ListaTesistas) {
    this._tesistas = value;
  }
}
