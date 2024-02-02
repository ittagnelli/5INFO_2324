const insert = (str1, agg, pos) => {
    return `${str1.substring(0, pos).trim()} ${agg} ${str1.substring(pos,).trim()}`
};

let string = 'Facciamo tanti esercizi che ci fanno bene', ins = 'Javascript', index = 23;
console.log(insert(string, ins, index));