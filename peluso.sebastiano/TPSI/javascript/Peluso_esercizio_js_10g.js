

let stringa = "Ciao Mondo!!!";

function invert_case(stringa) {

    let array_stringa = stringa.split(" ");

    for (let i = 0; i < array_stringa.length; i++) {

        let element = array_stringa[i];

        let carrateri_0 = array_stringa[i].charAt(0).toLowerCase();

        array_stringa[i] = carrateri_0.concat(array_stringa[i].substring(1).toUpperCase());
        

        
        
    }

    
    return array_stringa;

    
    
}

console.log("IN ",stringa);

console.log("OUT", invert_case(stringa));


