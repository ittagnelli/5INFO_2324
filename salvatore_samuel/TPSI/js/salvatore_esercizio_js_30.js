function filtra(array, N, M) {
    return array.filter(valore => valore >= N && valore <= M);
}

let array = [1, 5, 10, 15, 20, 25];
let N = 10;
let M = 20;
console.log(filtra(array, N, M));