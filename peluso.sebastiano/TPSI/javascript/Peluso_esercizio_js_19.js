

let array = [1,2,3,4,5,6,7,8,9,10];

let N = 4;

function restituzione(array, N) {

    let primiElementi = [];

    primiElementi = array.slice(0,4);

    return primiElementi;
    
}

console.log("primi elementi dell'array: ", restituzione(array));

