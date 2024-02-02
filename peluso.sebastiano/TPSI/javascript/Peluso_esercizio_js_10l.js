

let string1 = "casa";
let string2 = "javascript";

function concatena(string1,string2) {

    let lettere_stringa1 = string1.substring(0,2);
    let lettere_stringa2 = string2.substring(0,2);


    let concat1 = lettere_stringa1.concat(string2.substring(2));
    let concat2 = lettere_stringa2.concat(string1.substring(2));

    let testoFInito = concat1.concat(" ",concat2);

    return testoFInito;

   

    
}


console.log(concatena(string1,string2));


