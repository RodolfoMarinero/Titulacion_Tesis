import { ListaTareas } from "./listaTareas";
import { Tarea } from "./tarea";

export class Tesista {
  public tareas!: Tarea[];
  constructor(
    public matricula: string,
    public nombre: string,
    public apellidos: string,
    public carrera: string,
    public tituloTesis: string,
    public directorTesis: string,
    public fechaInicio: string,
    public fechaFinal: string,
    public correoElectronico: string,
    public contrasena: string,
    public notificacion: boolean = false,
    public revisor1?: string,
    public revisor2?: string,
    public codirectorTesis?: string,
    tareas?: Tarea[]
  ) {
    this.tareas != tareas;

  }
}
