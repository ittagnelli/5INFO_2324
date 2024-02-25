function invert_case(stringa) {
    let risultato = "";
    for (let elemento of stringa) {
        let lettera = elemento.charCodeAt();
        if (lettera >= 97 && lettera <= 122) {
            lettera -= 32;
        }
        else if (lettera >= 65 && lettera <= 90) {
            lettera += 32;
        }
        risultato += String.fromCharCode(lettera);
    }
    return risultato;
}

let stringa = "CiAo moNdo, ci piace JS!";
console.log(invert_case(stringa));