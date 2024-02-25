let num = [1, 2, 3, 4]
let N = 3

function rmElement(num, N){
    return num.filter(value => value !== 3)
}

let newNum = rmElement(num, N);
console.log(newNum)