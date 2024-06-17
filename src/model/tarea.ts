export class Tarea {
  constructor(
    public id: number,

    public actividad: string,
    public estado: string,
    public fechaInicial: Date,
    public fechaLimite: Date,
    public descripcion?: string
  ) {}
}
