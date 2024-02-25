let N = 3;
let M = 100;

function randomUnique(N, M){
    let num = new Set();

    while(num.size < N){
        num.add(Math.floor(Math.random() * M) + 1);
    }

    let numVet = Array.from(num).sort((a, b) => b - a);

    return numVet
}

let vet = randomUnique(N, M);
console.log(vet)