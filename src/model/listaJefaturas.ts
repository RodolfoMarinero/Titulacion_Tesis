import { Jefatura } from "./jefatura";

export class ListaJefaturas {
  public jefaturas: Jefatura[] = [];

  constructor() {}

  getJefaturas(): Jefatura[] {
    return this.jefaturas;
  }

  public agregar(jefatura: Jefatura) {
    this.jefaturas.push(jefatura);
  }

  public remove(index: number) {
    this.jefaturas.splice(index, 1);
  }

  actualizar(nuevaJefatura: Jefatura) {
    const indice = this.jefaturas.findIndex(
      (jefatura) => jefatura.id === nuevaJefatura.id
    );
    if (indice !== -1) {
      this.jefaturas[indice] = nuevaJefatura;
    } else {
      throw new Error(
        "No se encontró ninguna Jefatura con el ID proporcionado."
      );
    }
  }

  getJefaturaById(id: string): Jefatura {
    const jefatura = this.jefaturas.find((jefatura) => jefatura.id === id);
    return jefatura!;
  }
  getJefaturaByCarrera(carrera: string): Jefatura | undefined {
    return this.jefaturas.find((jefatura) => jefatura.carrera === carrera);
  }
  
  getJefaturaByEmail(email: string): Jefatura | undefined {
    return this.jefaturas.find(
      (jefatura) => jefatura.correoElectronico === email
    );
  }
}
