import { Injectable } from "@angular/core";
import { Tarea } from "../model/tarea";
import { ListaTareas } from "../model/listaTareas";

@Injectable({
  providedIn: "root",
})
export class BdTareasService {
  constructor() {}
  getTareas(): ListaTareas {
    const tareasString = localStorage.getItem("tareas");
    const listaTareas = new ListaTareas();
    if (!tareasString) {
      return listaTareas;
    }
    try {
      const tareaArray = JSON.parse(tareasString);
      tareaArray.forEach((tarea: Tarea) => {
        listaTareas.agregar(tarea);
      });
      return listaTareas;
    } catch (error) {
      console.error("Error al parsear tareas del localStorage", error);
      return listaTareas;
    }
  }
  setTareas(tareas: ListaTareas) {
    const array = tareas.getTareas();
    localStorage.setItem("tareas", JSON.stringify(array));
  }
  agregarTareas(nuevoTarea: Tarea) {
    const listaTareas = this.getTareas();
    listaTareas.agregar(nuevoTarea);
    this.setTareas(listaTareas);
  }
}
