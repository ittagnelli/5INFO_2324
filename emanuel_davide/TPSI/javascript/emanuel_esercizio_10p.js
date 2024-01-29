let stringa="Facciamo tanti esercizi che ci fanno bene";
let numero=3;

function tronca(stringa,numero){
    return stringa.split(" ").slice(0,numero).join(" ");
}
console.log(tronca(stringa,numero));