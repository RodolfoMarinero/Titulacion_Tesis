import { Tarea } from "./tarea";

export class ListaTareas {
  public tareas: Tarea[] = [];

  constructor() {}

  getTareas(): Tarea[] {
    return this.tareas;
  }

  public agregar(user: Tarea) {
    this.tareas.push(user);
  }

  public remove(index: number) {
    this.tareas.splice(index, 1);
  }
  actualizar(nuevoTarea: Tarea) {
    const indice = this.tareas.findIndex(
      (tareas) => tareas.id === nuevoTarea.id
    );
    if (indice !== -1) {
      this.tareas[indice] = nuevoTarea;
    } else {
      throw new Error(
        "No se encontró ningún Tarea con la matrícula proporcionada."
      );
    }
  }
  getTareaById(id: number): Tarea{
    const tarea = this.tareas.find((tareas) => tareas.id === id);
    return tarea!;
  }
}
