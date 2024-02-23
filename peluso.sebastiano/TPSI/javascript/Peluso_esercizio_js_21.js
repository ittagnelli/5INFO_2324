



let N = 3;

function casuale(N) {

    let arrayCasuali = [];

    arrayCasuali = Array.from({length:100}, () => Math.floor(Math.random() * 50)+1);
    
    
    
    let arraydiMUltipli = arrayCasuali.map((value) => value%N == 0 ? 0 : value);
    

    return arraydiMUltipli;
}

console.log("array con numeri primi azzerati : ", casuale(N));