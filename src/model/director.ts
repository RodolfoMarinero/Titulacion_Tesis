export class Director {
    public nombre: string;
    public apellidos: string;
    public area: string;
    public universidad?: string;
    public tesistas: string[];
  
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
      this.tesistas = []; 
    }
  }
  