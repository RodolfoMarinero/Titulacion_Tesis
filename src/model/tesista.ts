export class Tesista {
    public id!: number;
    public nombre: String = '';
    public tesis: string = '';
    public carrera: string = '';
    public notificacion: boolean = false;
  
    constructor(
      id: number,
      nombre: String,
      tesis: string,
      carrera: string,
      notificaion: boolean
    ) {
      this.id = id;
      this.nombre = nombre;
      this.tesis = tesis;
      this.carrera = carrera;
    }
  }