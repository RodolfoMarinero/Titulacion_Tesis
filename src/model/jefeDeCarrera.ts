export class JefeDeCarrera {
    public nombre: string;
    public apellidos: string;
    public area: string;
    public universidad?: string;
  
    // Constructor
    constructor(
      nombre: string,
      apellidos: string,
      area: string,
      universidad?: string
    ) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.area = area;
      this.universidad = universidad;
    }
  }
  