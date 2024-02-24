
let stringa = "supercalifragilistichespiralidoso";

function duplicati(stringa) {

    let array_stringa = [];

    array_stringa = stringa.split("");

    let arraysenzaduplicati = [];

    arraysenzaduplicati = new Set(array_stringa);

    arraysenzaduplicati = [...arraysenzaduplicati];

    let stringasenzaduplicati = arraysenzaduplicati.join("");
    


    return stringasenzaduplicati;
}

console.log("IN ", stringa);
console.log("OUT", duplicati(stringa));