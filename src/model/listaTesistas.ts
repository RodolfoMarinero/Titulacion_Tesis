import { Tesista } from "./tesista";

export class ListaTesistas {
  public tesistas: Tesista[] = [];

  constructor() {}

  getTesistas(): Tesista[] {
    return this.tesistas;
  }

  public agregar(user: Tesista) {
    this.tesistas.push(user);
  }

  public remove(index: number) {
    this.tesistas.splice(index, 1);
  }

  actualizar(nuevoTesista: Tesista) {
    const indice = this.tesistas.findIndex(
      (tesista) => tesista.matricula === nuevoTesista.matricula
    );
    if (indice !== -1) {
      this.tesistas[indice] = nuevoTesista;
    } else {
      throw new Error(
        "No se encontró ningún Tesista con la matrícula proporcionada."
      );
    }
  }

  getTesistaByMatricula(matricula: String): Tesista {
    const tesista = this.tesistas.find(
      (tesista) => tesista.matricula === matricula
    );
    return tesista!;
  }
}
