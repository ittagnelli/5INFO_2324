class Quadrato{
    constructor(lato){
        this._lato = lato;
    }

    set lato(val){
        return this._lato = val;
    }

    get perimetro() {return this._lato * 4}
    get area() {return this._lato ** 2}
}

let q = new Quadrato(3)

let P = q.perimetro;
let A = q.area;

console.log("Il perimetro del quadrato è:", P);
console.log("Area del quadrato è:", A);