let vetBin = "101010";

function binTodec(vetBin){
    let arrBin = vetBin.split("").map(Number).reverse();

    let decValue = arrBin.reduce((acc, current, i) => {
        return acc + current * Math.pow(2, i)
    }, 0);

    return decValue;
}

let numDec = binTodec(vetBin);
console.log(numDec)