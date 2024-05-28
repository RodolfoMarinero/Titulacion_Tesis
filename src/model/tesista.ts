import { ListaTareas } from "./listaTareas";

export class Tesista {
  private _matricula: string;
  private _nombre: string;
  private _apellidos: string;
  private _carrera: string;
  private _tituloTesis: string;
  private _directorTesis: string;
  private _codirectorTesis?: string;
  private _correoElectronico: string;
  private _contrasena: string;
  private _notificacion?: boolean;
  private _revisor1?: string;
  private _revisor2?: string;
  private _tareas?: ListaTareas;

  constructor(
    matricula: string,
    nombre: string,
    apellidos: string,
    carrera: string,
    tituloTesis: string,
    directorTesis: string,
    correoElectronico: string,
    contrasena: string,
    notificacion: boolean = false,
    codirectorTesis?: string,
    revisor1?: string,
    revisor2?: string,
    tareas?: ListaTareas
  ) {
    this._matricula = matricula;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._carrera = carrera;
    this._tituloTesis = tituloTesis;
    this._directorTesis = directorTesis;
    this._correoElectronico = correoElectronico;
    this._contrasena = contrasena;
    this._notificacion = notificacion;
    this._codirectorTesis = codirectorTesis;
    this._revisor1 = revisor1;
    this._revisor2 = revisor2;
    this._tareas = tareas;
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

  get carrera(): string {
    return this._carrera;
  }

  set carrera(value: string) {
    this._carrera = value;
  }

  get tituloTesis(): string {
    return this._tituloTesis;
  }

  set tituloTesis(value: string) {
    this._tituloTesis = value;
  }

  get directorTesis(): string {
    return this._directorTesis;
  }

  set directorTesis(value: string) {
    this._directorTesis = value;
  }

  get codirectorTesis(): string | undefined {
    return this._codirectorTesis;
  }

  set codirectorTesis(value: string | undefined) {
    this._codirectorTesis = value;
  }

  get correoElectronico(): string {
    return this._correoElectronico;
  }

  set correoElectronico(value: string) {
    this._correoElectronico = value;
  }

  get contrasena(): string {
    return this._contrasena;
  }

  set contrasena(value: string) {
    this._contrasena = value;
  }

  get notificacion(): boolean | undefined {
    return this._notificacion;
  }

  set notificacion(value: boolean | undefined) {
    this._notificacion = value;
  }

  get revisor1(): string | undefined {
    return this._revisor1;
  }

  set revisor1(value: string | undefined) {
    this._revisor1 = value;
  }

  get revisor2(): string | undefined {
    return this._revisor2;
  }

  set revisor2(value: string | undefined) {
    this._revisor2 = value;
  }

  get tareas(): ListaTareas | undefined {
    return this._tareas;
  }

  set tareas(value: ListaTareas | undefined) {
    this._tareas = value;
  }
}
