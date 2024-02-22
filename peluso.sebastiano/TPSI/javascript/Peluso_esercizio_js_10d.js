



let stringa = "ciao mondo!!!";

function capitalize(stringa) {

    

    let carattere = stringa.charAt(0).toUpperCase();

    let stringa2 = stringa.replace(stringa.charAt(0),carattere);

    return stringa2;

    
}


console.log("IN: ",stringa);

console.log("OUT: ", capitalize(stringa));


