import { Tesista } from "./tesista";

export class Tarea {
  constructor(
    public id: number,
    public actividad: string,
    public estado: string,
    public fechaInicial: Date,
    public fechaLimite: Date,
    public tesista?: Tesista,
    public descripcion?: string
  ) {}
}
