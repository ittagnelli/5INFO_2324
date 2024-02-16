function cerca(frase) {
    var parole = frase.split(" ");
    if (parole.includes("coding") && parole.includes("creativo")) {
        return frase;
    } else {
        return "Parole non trovate";
    }
}
var fraseInput = "Viva il coding creativo";
var risultato = cerca(fraseInput);
console.log(risultato);
