class Quadrato {
    constructor(l) {
        this.lato = l;
    }
    get lato() { return this._lato; }

    set lato(val) { this._lato = val; }

    get perimetro() { return this._lato * 4; }
    get area() { return this._lato ** 2; }
}

q = new Quadrato(1);

console.log("perimetro:", q.perimetro);

console.log("area:", q.area);  
