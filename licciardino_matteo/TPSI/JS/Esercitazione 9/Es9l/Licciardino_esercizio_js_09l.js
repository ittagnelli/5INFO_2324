const runOperation = (num, num2, callback) => {
    return callback(num, num2);
}

const somma = (x, y) => {return x + y}
const prodotto = (x, y) => {return x * y}
const potenza = (x, y) => {return Math.pow(x, y)}

const main = () => {
    let ris_sum = runOperation(97, 85, somma);
    console.log("Risultato della somma di due numeri è: ", ris_sum);

    let ris_prod = runOperation(13, 48, prodotto);
    console.log("Risultato del prodotto di due numeri è: ", ris_prod);

    let ris_pow = runOperation(23, 4, potenza);
    console.log("Risultato della potenza di due numeri è: ", ris_pow);
}

main();