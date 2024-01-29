function upper_case(stringa) {
    stringa.toLowerCase();
    let risultato = "";
    for (let elemento of stringa) {
        elemento = elemento.charCodeAt()-32;
        risultato = risultato + elemento + ",";
    }
    let risultato2 = String.fromCharCode(risultato);
    console.log(risultato);
    console.log(String.fromCharCode(risultato));
    return risultato2;
}

let stringa = "ciao mondo";
console.log(upper_case(stringa));