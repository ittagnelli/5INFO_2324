function arrayN(array, N) {

    console.log(array.slice(-N));

}

let N = 9;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
arrayN(array, N);