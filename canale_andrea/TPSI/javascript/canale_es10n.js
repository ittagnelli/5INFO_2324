function insert(str, str1, n) {
    return str.slice(0, n) + str1 + str.slice(n);
}

console.log(insert("Facciamo tanti esercizi che ci fanno bene", "Javascript", 23));
