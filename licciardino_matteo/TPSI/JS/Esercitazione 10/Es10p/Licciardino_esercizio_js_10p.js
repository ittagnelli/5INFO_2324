let frase = "Facciamo tanti esercizi che ci fanno bene";
let N = 3;

function tronca(frase, N) {
    return frase.split(" ").slice(0, N).join(" ");
}

console.log(tronca(frase, N));