const runOperation = (num, num2, callback) => {
    return callback(num, num2);
}

const somma = (x, y) => { return x + y }
const prodotto = (x, y) => { return x * y }
const differenza = (x, y) => { return x - y }
const potenza = (x, y) => { return Math.pow(x, y) }


let ris_sum = runOperation(2, 3, somma);
console.log("risultato della simma dei due numeri", ris_sum);
let ris_diff = runOperation(5, 2, differenza);
console.log("Risultato della sottrazione dei due numeri:", ris_diff);

let ris_prod = runOperation(4, 6, prodotto);
console.log("Risultato della moltiplicazione dei due numeri:", ris_prod);
let ris_pot = runOperation(2, 8, potenza);
console.log("Risultato della divisione dei due numeri:", ris_pot);