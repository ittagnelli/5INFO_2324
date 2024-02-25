function range(array, N, M) {
    return array.filter(numero=>numero>=N && numero<=M);
}

let array=[1, 5, 10, 15, 20];
let N=5;
let M=15;

console.log(range(array,N,M))
