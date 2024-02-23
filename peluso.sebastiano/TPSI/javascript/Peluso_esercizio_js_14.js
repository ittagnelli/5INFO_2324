
let N = 0;
let M = 2;

let array = [10,20,30,40,50];


function spostamento(N,M,array) {

    let Posizione_N = array.splice(N,1);

    array.splice(M,0,Posizione_N);

    

    return array.flat(1);
    
}

console.log("IN ", array);
console.log("OUT ", spostamento(N,M,array));