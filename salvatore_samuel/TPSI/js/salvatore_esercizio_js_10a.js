function abbreviazione(stringa){
    let splitted = stringa.split(" ");
    let cognome = splitted[1].slice(0,1).toUpperCase();
    let nome = splitted[0].toUpperCase();
    let modificato = "";
    return modificato.concat(nome, " ", cognome, ".");
}
console.log(abbreviazione("Samuel Salvatore"));
console.log(abbreviazione("Antionio miglior prof Mancuso"));