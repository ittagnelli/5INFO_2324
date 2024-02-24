

let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
  ];


function media(studenti) {

    let numeroStudenti = studenti.length;

    

    let somma = studenti.reduce((acc,studente) => studente.eta + acc,0);

    let etamedia = somma/numeroStudenti;

    return etamedia;
    
}

console.log("L'età media degli studenti è : ", media(studenti));

