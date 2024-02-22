const avg_age = (l) => {
    return l.reduce((acc, e) => acc += e.eta, 0) / l.length;
};

let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
];
console.log(`IN:\n${JSON.stringify(studenti)}\n\nEtà media studenti: ${avg_age(studenti)}`);