import { BDRevisoresService } from "../app/bd-revisores.service";

import { Revisor } from "./revisor";

class ListaRevisores {
  public revisores: Revisor[] = [];

  constructor(public bdRevisor: BDRevisoresService) {
    this.revisores = this.getRevisoresFromStorage();
  }

  getRevisores(): Revisor[] {
    return this.revisores;
  }
  private getRevisoresFromStorage(): Revisor[] {
    return this.bdRevisor.getRevisores();
  }

  public agregar(user: Revisor) {
    this.revisores.push(user);
    this.save();
  }

  public remove(index: number) {
    this.revisores.splice(index, 1);
    this.save();
  }

  public save() {
    this.bdRevisor.setRevisores(this.revisores);
  }
}
