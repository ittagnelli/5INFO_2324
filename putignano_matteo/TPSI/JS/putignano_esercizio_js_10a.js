let nome = "matteo putignano"

const abbreviazione = function(str){
    let splitted = str.split(' ');
    let i_nome = splitted[0].slice(0,1).toUpperCase();
    let i_cognome = splitted[1].slice(0,1).toUpperCase();
    let corretta = i_nome.concat(splitted[0].slice(1), " ", i_cognome,".");
    return(corretta);
}

console.log(abbreviazione(nome));