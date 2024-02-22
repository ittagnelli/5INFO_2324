function nomi(studenti){

    return studenti.map(studenti=>studenti.nome);

}

let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
  ];


console.log(nomi(studenti))