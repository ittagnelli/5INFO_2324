function tronca(stringa, sost) {
    stringa = stringa.replace(sost, "");
    return stringa;
}

let stringa = "Ciao a tutto l'Agnelli!!!";
let stringa2 = "tutto";
console.log(tronca(stringa, stringa2));