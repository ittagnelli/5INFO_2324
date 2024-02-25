const non_anagrammi = (l) => {
    let p_pure = new Map();
    l.map(e => p_pure.set(e.split('').reduce((acc, el) => acc += el.charCodeAt(), 0), e));
    return Array.from(p_pure.values());
};

let parole = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];
console.log(`IN: ${parole}\nOUT: ${non_anagrammi(parole)}`);