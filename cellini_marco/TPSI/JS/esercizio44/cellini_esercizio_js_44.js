class Studente {
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
    }
}

class Docente {
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
    }
}

const confrontaOBJ = (oby_one, ob2) => {
    return ((oby_one instanceof Studente && ob2 instanceof Studente) || (oby_one instanceof Docente && ob2 instanceof Docente)) && JSON.stringify(oby_one) === JSON.stringify(ob2);
};

let studente = new Studente("Mario", 4);
let docente = new Docente("Mario", 4);

console.log(`Sono uguali:\t${confrontaOBJ(studente, docente)}`);