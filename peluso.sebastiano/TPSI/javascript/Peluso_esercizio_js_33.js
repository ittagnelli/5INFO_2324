
let stringa = "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";

function stampa(stringa) {

    let map = new Map();

    let num_parola;

    let array_stringa = [];

    array_stringa = stringa.split(" ");

    for (const value of array_stringa) {
        

        if (map.has(value)) {

            num_parola = map.get(value);
            num_parola = num_parola+1;
            map.delete(value);
            map.set(value,num_parola);
            
        }
        else{
            map.set(value,1);
        }
        
        
    }
 
    return map;

}

console.log("IN ",stampa(stringa));