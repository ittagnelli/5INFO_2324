let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
];

function getNomi(studenti){
    let nomi = [];

    for (const studente of studenti) {
        nomi.push(studente.nome);
    }

    return nomi;
}

let vet = getNomi(studenti);
console.log(vet)