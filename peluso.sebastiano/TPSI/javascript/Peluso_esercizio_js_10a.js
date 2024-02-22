
let stringa = "Sebastiano Peluso";

function abbreviazione(stringa) {

    let stringhe = stringa.split(" ");

    let nome = stringhe[0];

    let Carattere = stringhe[1].charAt(0).toUpperCase();

    stringhe[1] = Carattere;

    let stringa_Abbreviata = nome.concat(" ", Carattere, ".");

    


    return stringa_Abbreviata;
    
    
}


console.log("IN: ",stringa);
    
console.log("OUT: ",abbreviazione(stringa));



















