const tronca = (s, n) => {
    return `${s.substring(0, n)}...`;
};

let string = 'Facciamo tanti esercizi che ci fanno bene';
console.log(tronca(string, 10));