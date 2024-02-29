let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
  ];

function nomi(studenti) {


    let arraynomi = [];

    studenti.forEach(element => {
        
        arraynomi.push(element.nome);
        
    });

    return arraynomi;


}

console.log("I nomi sono: ", nomi(studenti));