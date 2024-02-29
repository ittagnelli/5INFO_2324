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

let studente = new Studente("Mario", 4);

let docente = new Docente("Mario", 4);

const isEqualOBJ = (studente, docente) => {
    return JSON.stringify(studente) === JSON.stringify(docente)
}

let ris = isEqualOBJ(studente, docente);
console.log(ris);