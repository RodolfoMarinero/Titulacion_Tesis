import { BDRevisoresService } from "../app/bd-revisores.service";

import { Revisor } from "./revisor";

class ListaRevisores {
  public revisores: Revisor[] = [];

  constructor(public service: BDRevisoresService) {
    this.get();
  }

  public agregar(user: Revisor) {
    this.revisores.push(user);
    //this.save();
    this.get();
  }

  public remove(index: number) {
    this.revisores.splice(index, 1);
    this.save(this.revisores);
  }

  public save(revisores: Revisor[]) {
    localStorage.setItem("users", JSON.stringify(revisores));
  }

  public get(): void {
    this.service.getRevisores();
  }
}
