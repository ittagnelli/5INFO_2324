let utente = {
    nome: "marco",
    cognome: "minetti"
}

let chiavi = Object.keys(utente);
console.log(chiavi);

for (i = 0; i < chiavi.length; i++) {
    console.log("Chiavi =", chiavi[i], "  Valori =", utente[chiavi[i]]);
}