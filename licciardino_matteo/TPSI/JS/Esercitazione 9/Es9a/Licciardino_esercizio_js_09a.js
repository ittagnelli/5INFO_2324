let utente = {
    Nome: "Matteo",
    Cognome: "Licciardino",
    Età: 19
};

let keys = Object.keys(utente);

for (let i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = utente[key];
    console.log(key + ": " + value)
}