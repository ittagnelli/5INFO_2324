//GIUSTO

let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
];


function nomi (s)
{
    let name = s.map((values) => values.nome)

    return name
}


console.log(nomi(studenti))