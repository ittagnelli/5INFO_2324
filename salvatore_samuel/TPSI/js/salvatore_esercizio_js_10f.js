function upper_case(stringa) {
    let risultato = "";
    for (let elemento of stringa) {
        let lettera = elemento.charCodeAt();
        if (lettera >= 97 && lettera <= 122) {
            lettera -= 32;
        }
        risultato += String.fromCharCode(lettera);
    }
    return risultato;
}

let stringa = "Ciao mondo, ci piace js";
console.log(upper_case(stringa));