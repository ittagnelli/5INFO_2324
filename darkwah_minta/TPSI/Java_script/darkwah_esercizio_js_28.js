//GIUSTO

let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
];

function media(s)
{
    let med = s.map((item) => item.eta)
    let calc = med.length
    med = med.reduce((acc, current) => acc+ current,0)


    return med/ calc
}



console.log(media(studenti))