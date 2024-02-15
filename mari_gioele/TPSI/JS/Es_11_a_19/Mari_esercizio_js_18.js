let numeri = [1, 2, 3, 4];

function moltiSquare(numeri){
    let quadrati = numeri.reduce((acc, current) => acc * Math.pow(current, 2), 1);
    return quadrati
}

let square = moltiSquare(numeri)
console.log(square);