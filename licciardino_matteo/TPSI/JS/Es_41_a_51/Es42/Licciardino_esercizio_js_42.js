class Calcolatrice {
    constructor(n) {
        this._n = n;
    }

    get n(){return this._n;}
    set n(n){this._n = n;}

    get somma() {
        return (num) => {
            this._n += num;
            return this;
        };
    }

    get sottrazione() {
        return (num) => {
            this._n -= num;
            return this;
        };
    }

    get moltiplicazione() {
        return (num) => {
            this._n *= num;
            return this;
        };
    }

    get divisione() {
        return (num) => {
            this._n /= num;
            return this;
        };
    }
}

let calc = new Calcolatrice()
let calc2 = new Calcolatrice()
let calc3 = new Calcolatrice()
let calc4 = new Calcolatrice()

calc.n = 5
calc2.n = 6
calc3.n = 11
calc4.n = 29

let ris = calc.somma(3).sottrazione(2).somma(4).moltiplicazione(5).sottrazione(2).divisione(2)
let ris2 = calc2.sottrazione(2).moltiplicazione(5).somma(8).divisione(4)
let ris3 = calc3.moltiplicazione(3).somma(5).sottrazione(5).divisione(11)
let ris4 = calc4.somma(2).sottrazione(7).divisione(3).divisione(2).somma(1).moltiplicazione(2)

console.log(ris.n)
console.log(ris2.n)
console.log(ris3.n)
console.log(ris4.n)