class Calcolatrice {
    constructor(n) {
        this.n = n;
    }
    somma(m) {
        this.n += m;
        return this;
    }
    sottrazione(m) {
        this.n -= m;
        return this;
    }
    moltiplicazione(m) {
        this.n *= m;
        return this;
    }
    divisione(m) {
        this.n /= m;
        return this;
    }
}

let risultato = new Calcolatrice(0);

risultato.somma(6).sottrazione(2).moltiplicazione(5).somma(8).divisione(4);

console.log(risultato.n);
