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

const OBJ=(s1, s2)=>
{
    return (JSON.stringify(s1)===JSON.stringify(s2));
}


let studente = new Studente("Mario", 4);

let docente = new Docente("Mario", 4);
console.log(OBJ(studente, docente));
