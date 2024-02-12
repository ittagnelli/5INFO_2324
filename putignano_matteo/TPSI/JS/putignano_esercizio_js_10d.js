let string = "ciao mi chiamo Matteo Putignano e studio informatica all' agnelli"

const capitalize = function(str){
    let primo_char = str.split('');
    let resto = str.substring(1);
    return(primo_char[0].toUpperCase().concat(resto));
}

console.log(capitalize(string));