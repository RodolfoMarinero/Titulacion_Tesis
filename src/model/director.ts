//import { ListaTesistas } from "./listaTesistas";

export class Director {
  // Constructor
  constructor(
    public id: string,
    public nombre: string,
    public apellidos: string,
    public area: string,
    public notificacion: boolean,
    public universidad?: string
  ) {}
}
