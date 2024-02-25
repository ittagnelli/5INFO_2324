let string = "ciao mi chiamo matteo putignano e studio informatica all' agnelli"

const capitalize_all = function(str){
    let parole = str.split(' ');
    let result = "";
    for(let i = 0; i < parole.length; i++)
    {
        let primo_char = parole[i].split('');
        let parola_up = parole[i].replace(primo_char[0],primo_char[0].toUpperCase());
        result = result.concat(parola_up,' ');
    }
    return(result);
}

console.log(capitalize_all(string));