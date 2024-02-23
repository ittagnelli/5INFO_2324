

let array = [1,2,3,4,5,6,7,8,9,10];

let N = 4;

function restituzione(array, N) {

    let ultimiElementi = [];

    ultimiElementi = array.slice(-N);

    return ultimiElementi;
    
}

console.log("ultimi elementi  dell'array: ", restituzione(array,N));

