
import { Revisor } from "./revisor";

export class ListaRevisores {
  public revisores: Revisor[] = [];

  constructor() {
    
  }

  getRevisores(): Revisor[] {
    return this.revisores;
  }
 

  public agregar(user: Revisor) {
    this.revisores.push(user);
   
  }

  public remove(index: number) {
    this.revisores.splice(index, 1);
    
  }

  
}
