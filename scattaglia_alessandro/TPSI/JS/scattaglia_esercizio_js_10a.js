
function abbreviazione(str) {
    let nome = str.split(" ");
    let primo = nome[0];
    let secondo = nome[1];
    secondo = secondo.charAt(0) + ".";

    return primo + " " + secondo.toUpperCase();



}

console.log(abbreviazione("alessandro scattaglia"));