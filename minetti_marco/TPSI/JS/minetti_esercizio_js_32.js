const non_anagrammi = (l) => {
    let p_pure = new Map();
    l.map(e => p_pure.set(e.toLowerCase().split('').sort().join(''), e));
    return Array.from(p_pure.values());
};

let parole = ['Omar', 'Sette', 'roma', 'teste', 'mora', 'Colazione', 'locazione'];
console.log(non_anagrammi(parole));