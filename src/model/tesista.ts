import { ListaTareas } from "./listaTareas";

export class Tesista {
  public matricula: string;
  public nombre: string;
  public apellidos: string;
  public carrera: string;
  public tituloTesis: string;
  public directorTesis: string;
  public codirectorTesis?: string;
  public correoElectronico: string;
  public contrasena: string;
  public notificacion?: boolean;
  public revisor1?: string;
  public revisor2?: string;
  public tareas?: ListaTareas;

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
    revisor1?: string,
    revisor2?: string,
    codirectorTesis?: string,
    tareas?: ListaTareas
  ) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.carrera = carrera;
    this.tituloTesis = tituloTesis;
    this.directorTesis = directorTesis;
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
    this.notificacion = notificacion;
    this.codirectorTesis = codirectorTesis;
    this.revisor1 = revisor1;
    this.revisor2 = revisor2;
    this.tareas = tareas;
  }

  // Getters and Setters
  public getMatricula(): string {
    return this.matricula;
  }

  public setMatricula(matricula: string): void {
    this.matricula = matricula;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getApellidos(): string {
    return this.apellidos;
  }

  public setApellidos(apellidos: string): void {
    this.apellidos = apellidos;
  }

  public getCarrera(): string {
    return this.carrera;
  }

  public setCarrera(carrera: string): void {
    this.carrera = carrera;
  }

  public getTituloTesis(): string {
    return this.tituloTesis;
  }

  public setTituloTesis(tituloTesis: string): void {
    this.tituloTesis = tituloTesis;
  }

  public getDirectorTesis(): string {
    return this.directorTesis;
  }

  public setDirectorTesis(directorTesis: string): void {
    this.directorTesis = directorTesis;
  }

  public getCodirectorTesis(): string | undefined {
    return this.codirectorTesis;
  }

  public setCodirectorTesis(codirectorTesis: string | undefined): void {
    this.codirectorTesis = codirectorTesis;
  }

  public getCorreoElectronico(): string {
    return this.correoElectronico;
  }

  public setCorreoElectronico(correoElectronico: string): void {
    this.correoElectronico = correoElectronico;
  }

  public getContrasena(): string {
    return this.contrasena;
  }

  public setContrasena(contrasena: string): void {
    this.contrasena = contrasena;
  }

  public getNotificacion(): boolean | undefined {
    return this.notificacion;
  }

  public setNotificacion(notificacion: boolean | undefined): void {
    this.notificacion = notificacion;
  }

  public getRevisor1(): string | undefined {
    return this.revisor1;
  }

  public setRevisor1(revisor1: string | undefined): void {
    this.revisor1 = revisor1;
  }

  public getRevisor2(): string | undefined {
    return this.revisor2;
  }

  public setRevisor2(revisor2: string | undefined): void {
    this.revisor2 = revisor2;
  }

  public getTareas(): ListaTareas | undefined {
    return this.tareas;
  }

  public setTareas(tareas: ListaTareas | undefined): void {
    this.tareas = tareas;
  }
}
