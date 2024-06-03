import { Protocolo } from "./protocolo";

export class ListaProtocolos {
  public protocolos: Protocolo[] = [];

  constructor() {}

  getProtocolos(): Protocolo[] {
    return this.protocolos;
  }

  public agregar(user: Protocolo) {
    this.protocolos.push(user);
  }

  public remove(index: number) {
    this.protocolos.splice(index, 1);
  }

  actualizar(nuevoProtocolo: Protocolo) {
    const indice = this.protocolos.findIndex(
      (protocolo) => protocolo.matricula === nuevoProtocolo.matricula
    );
    if (indice !== -1) {
      this.protocolos[indice] = nuevoProtocolo;
    } else {
      throw new Error(
        "No se encontró ningún Protocolo con la matrícula proporcionada."
      );
    }
  }

  getProtocoloByMatricula(matricula: string): Protocolo {
    const protocolo = this.protocolos.find(
      (protocolo) => protocolo.matricula === matricula
    );
    return protocolo!;
  }
}
