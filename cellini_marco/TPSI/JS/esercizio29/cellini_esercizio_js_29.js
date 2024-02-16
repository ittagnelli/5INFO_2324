const names = (l) => {
    let n = [];
    l.forEach(e => n.push(e.nome));
    return n;
};

let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
];
console.log(`IN: ${JSON.stringify(studenti)}\nOUT: ${names(studenti)}`);