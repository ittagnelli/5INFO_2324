class Quadrato {
    constructor(l) {
        this.lato = l; //lato è un attributo della classe Qaudrato
    }

    set lato(val) { this._lato = val; }
    get get_lato() { return this._lato; }
    get area() { return this._lato ** 2; }
    get perimetro() { return this._lato * 4; }
}

q = new Quadrato(5);
console.log(`lato = ${q.get_lato}\nPerimetro = ${q.perimetro}\nArea = ${q.area}`);