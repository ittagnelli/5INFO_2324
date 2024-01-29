let stringa="Facciamo tanti esercizi che ci fanno bene";
let L=10;


function tronca(stringa,L){
    return stringa.substring(0,L)+"...";
}
console.log(tronca(stringa,L));