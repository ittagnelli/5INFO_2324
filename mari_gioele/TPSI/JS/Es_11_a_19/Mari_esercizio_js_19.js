let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let N = 3;

function firstElement(num, N){
    return num.slice(0, N)
}

let newNum = firstElement(num, N);
console.log(newNum);