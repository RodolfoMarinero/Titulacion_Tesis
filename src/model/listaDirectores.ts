import { Director } from "./director";

export class ListaDirectores {
  public directores: Director[] = [];

  constructor() {}

  getDirector(): Director[] {
    return this.directores;
  }

  public agregar(user: Director) {
    this.directores.push(user);
  }

  public remove(index: number) {
    this.directores.splice(index, 1);
  }

  actualizar(nuevoDirector: Director) {
    const indice = this.directores.findIndex(
      (director) => director.id === nuevoDirector.id
    );
    if (indice !== -1) {
      this.directores[indice] = nuevoDirector;
    } else {
      throw new Error(
        "No se encontró ningún Revisor con la matrícula proporcionada."
      );
    }
  }

  getDirectorById(id: string): Director {
    const director = this.directores.find((director) => director.id === id);
    return director!;
  }
}
