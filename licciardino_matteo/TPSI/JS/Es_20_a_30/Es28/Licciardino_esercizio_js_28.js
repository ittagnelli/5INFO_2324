let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
];

function etàMedia(studenti){
    let sum = 0;

    for (const studente of studenti) {
        sum += studente.eta;
    }

    let media = sum / studenti.length;

    return media;
}

let year = etàMedia(studenti)
console.log(year);