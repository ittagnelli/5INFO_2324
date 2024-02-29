
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

let N = 1;
let M = 8;



function filtro(array,N,M) {

    let arrayfiltrati = [];

    arrayfiltrati = [...array];

    arrayfiltrati = arrayfiltrati.filter((value) => value >= N && value <= M);
    

    return arrayfiltrati;
}

console.log("OUT", filtro(array,N,M));