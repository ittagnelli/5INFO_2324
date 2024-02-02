function tronca(stringa, n) {
    let splittato = stringa.split(" ");
    let risultato = "";
    for (let i = 0; i < n; i++) {
        risultato += splittato.at(i) + " ";
    }
    return risultato;
}

let stringa = "Ciao a tutto l'Agnelli!!!";
let n = 3;
console.log(tronca(stringa, n));