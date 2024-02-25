function tronca(str, n) {
    return str.split(" ").slice(0, n).join(" ");
}

console.log(tronca("Facciamo tanti esercizi che ci fanno bene", 3));
