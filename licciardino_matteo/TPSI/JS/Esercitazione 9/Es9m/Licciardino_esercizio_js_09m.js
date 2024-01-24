const runOperation = (num, num2, callback) => {
    return callback(num, num2);
}

const somma = (x, y) => {return x + y}
const prodotto = (x, y) => {return x * y}
const differenza = (x, y) => {return x - y}
const divisione = (x, y) => {return x / y}

const main = () => {
    let ris_sottr = runOperation(86, 58, differenza);
    console.log("Risultato della differenza di due numeri è: ", ris_sottr);

    let ris_div = runOperation(21, 7, divisione);
    console.log("Risultato della divisione di due numeri è: ", ris_div);
}

main();