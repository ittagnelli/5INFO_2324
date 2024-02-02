function sostituisci(frase) {
    frase = frase[0].toUpperCase() + frase;
    return frase
}

let frase = "ciao mondo";
let ris = sostituisci(frase);
console.log(ris);