
let array = [1,2,3,4,5,6,7];

let M = 4;


function separatore(array,M) {

    let arraySeparato = [];

    arraySeparato = array.join("");

    arraySeparato = arraySeparato.split(M);

    let arrayfinito = [];

    arrayfinito = arraySeparato[1].concat(arraySeparato[0]);

    arrayfinito = arrayfinito.split("");

    return arrayfinito;
    
}

console.log("OUT ", separatore(array,M));