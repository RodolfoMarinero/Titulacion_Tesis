import { Injectable } from '@angular/core';
import { Protocolo } from '../model/protocolo';
import { ListaProtocolos } from '../model/listaProtocolos';

@Injectable({
  providedIn: 'root'
})
export class BdProtocolosService {
  constructor() {}
  getProtocolos(): ListaProtocolos {
    const protocolosString = localStorage.getItem("protocolos");
    const listaProtocolos = new ListaProtocolos(); // Crear una instancia de ListaTesistas
    // Si no hay tesistas, retorna la lista vacía
    if (!protocolosString) {
      return listaProtocolos;
    }
    try {
      const protocolosArray = JSON.parse(protocolosString);
      protocolosArray.forEach((protocolo: Protocolo) => {
        listaProtocolos.agregar(protocolo);
      });
      return listaProtocolos;
    } catch (error) {
      console.error("Error al parsear protocolos del localStorage", error);
      return listaProtocolos;
    }
  }
  setProtocolos(protocolos: ListaProtocolos) {
    const array = protocolos.getProtocolos();
    localStorage.setItem("protocolos", JSON.stringify(array));
  }
  agregarProtocolo(nuevoProtocolo: Protocolo) {
    const listaProtocolos = this.getProtocolos();
    listaProtocolos.agregar(nuevoProtocolo);
    this.setProtocolos(listaProtocolos);
  }
}
