let string = "Ciao mi chiamo Matteo Putignano e studio informatica all' agnelli"

const untokenize = function(str){
    return(str.replaceAll(' ','-'));
}

console.log(untokenize(string));