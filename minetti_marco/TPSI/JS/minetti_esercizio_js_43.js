class Mammifero {
    genere = "genere";
    nome = "nome";
    _verso = "verso";

    verso() {
        console.log(`ciao, io sono un mammifero del genere ${this.genere}, mi chiamo ${this.nome} e per comunicare emetto un ${this._verso}`);
    }
}


class Gatto extends Mammifero {
    constructor(nome) {
        super(); // chiamo il costruttore della superclasse in quanto un gatto è un mammifero
        this.genere = "felis";
        this._verso = "miagolo";
        this.nome = nome;
    }

    verso() {
        super.verso();
    }
}

let gatto = new Gatto("Tom");
gatto.verso();