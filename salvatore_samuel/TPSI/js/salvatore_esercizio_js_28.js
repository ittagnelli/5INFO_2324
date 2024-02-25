function calcola(studenti) {
    let somma = studenti.reduce((acc, studente) => acc + studente.eta, 0);
    let media = somma / studenti.length;
    return media;
}

let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
];
console.log(calcola(studenti)); 