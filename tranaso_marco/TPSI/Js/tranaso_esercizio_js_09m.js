const somma = (a, b) => a + b;
const differenza = (a, b) => a - b;
const prodotto = (a, b) => a * b;
const divisione = (a, b) => (b !== 0 ? a / b : "Impossibile dividere per zero");
function main() {
    console.log("Somma:", somma(5, 3));
    console.log("Differenza:", differenza(10, 4));
    console.log("Prodotto:", prodotto(7, 2));
    console.log("Divisione:", divisione(15, 3));
}

main();
