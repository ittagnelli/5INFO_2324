class calcolatrice {

    constructor(valore_iniziale = 0) {
        this.valore_iniziale = valore_iniziale;
    }

    piu(val) {
        this.valore_iniziale += val;
        return this
    }

    meno(val) {
        this.valore_iniziale -= val;
        return this
    }

    per(val) {
        this.valore_iniziale *= val;
        return this
    }

    div(val) {
        this.valore_iniziale /= val;
        return this
    }

    stampa() {
        console.log(this.valore_iniziale);
        return this
    }
}


let cos = new calcolatrice(5);

cos.piu(10).stampa().meno(5).stampa().per(2).div(2).stampa();   