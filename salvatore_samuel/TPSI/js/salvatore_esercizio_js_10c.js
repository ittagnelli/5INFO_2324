function sostituisci(frase) {
    return frase.replaceAll(" ", "-");
}

let frase = "Nel mezzo del cammin di nostra vita";
let ris = sostituisci(frase);
console.log(ris);