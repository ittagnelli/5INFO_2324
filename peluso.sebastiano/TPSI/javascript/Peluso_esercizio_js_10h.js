
let stringa = "Ciao Mondo la terra gira!!!"
let lunghezza = 10;



function tronca(stringa) {

    let str_abbr = stringa.substring(0,lunghezza);

    let concatenata = str_abbr.concat("...");

    return concatenata;

    
    
}

console.log(stringa);
console.log(tronca(stringa));
