export class Alumno{
    constructor(private _id: number, private _nombre: String) {
        this._id = _id;
        this._nombre = _nombre;
    }
    get id() {
        return this._id;
    }
   
    get nombre() {
        return this._nombre;
    }
   
}