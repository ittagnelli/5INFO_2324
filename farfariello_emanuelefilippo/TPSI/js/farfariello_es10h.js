function tronca(stringa, n) {
    stringa = stringa.substring(0, n);
    stringa += ' ...';
    return stringa;
}

let stringa = "Ciao a tutto l'Agnelli!!!";
let n = 12;
console.log(tronca(stringa, n));