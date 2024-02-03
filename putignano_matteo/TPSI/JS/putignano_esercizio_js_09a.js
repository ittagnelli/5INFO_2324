let utente = {
    nome: "Matteo",
    cognome: "Putignano"
}
let variabile;

variabile = Object.keys(utente);

for(let i = 0; i < variabile.length; i++){
    console.log(`la chiave ha valore ${variabile[i]}`);
}