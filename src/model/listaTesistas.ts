import { ConexionBDService } from "../app/conexion-bd.service";
import { Tesista } from "./tesista";

class ListaTesistas {
    public tesistas: Tesista[] = [];

    constructor(public service:ConexionBDService) {
        this.get();

    }

    public agregar(user: Tesista) {
        this.tesistas.push(user);
        this.save();
        this.get();
    }

    public remove(index: number) {
        this.tesistas.splice(index, 1);
        this.save(this.tesistas);
    }

    public save(tesistas:Tesista[]) {
        localStorage.setItem('users', JSON.stringify(tesistas));
    }

    public get(): void {
        this.service.getTesistas();
    }
}