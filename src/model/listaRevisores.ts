import { Revisor } from "./revisor";

export class ListaRevisores {
  public revisores: Revisor[] = [];

  constructor() {}

  getRevisores(): Revisor[] {
    return this.revisores;
  }

  public agregar(user: Revisor) {
    this.revisores.push(user);
  }

  public remove(index: number) {
    this.revisores.splice(index, 1);
  }

  actualizar(nuevoRevisor: Revisor) {
    const indice = this.revisores.findIndex(
      (revisor) => revisor.matricula === nuevoRevisor.matricula
    );
    if (indice !== -1) {
      this.revisores[indice] = nuevoRevisor;
    } else {
      throw new Error(
        "No se encontró ningún Revisor con la matrícula proporcionada."
      );
    }
  }

  getRevisorByMatricula(matricula: string): Revisor {
    const revisor = this.revisores.find(
      (revisor) => revisor.matricula === matricula
    );
    return revisor!;
  }

  getRevisorByEmail(email: string): Revisor {
    return this.revisores.find(
      (revisor) => revisor.correoElectronico === email
    )!;
  }
}
