const tronca_parola = (s, pos) => {
    let f = '';
    s.split(' ').filter((e, i) => i < pos ? f += e + ' ' : null);
    return f;
};

let string = 'Facciamo tanti esercizi che ci fanno bene';
console.log(tronca_parola(string, 3));