
let array1 = [1,2,3];
let array2 = [1,2,3];


function controllo(array1,array2) {

    let ris = array2.every((value, i) => value == array1[i]);

    return ris;

    
}

console.log("RISULTATO: ", controllo(array1, array2));