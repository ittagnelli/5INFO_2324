

let array = [1,4,7,3,11,12,20];




function positivi(array) {

    let arraydiprimi = [];

    let arrayNONmUltipli = [];

    arraydiprimi = array.filter((value) =>  value%1 == 1 ||  value%2);

    arrayNONmUltipli = array.filter((value) => value%2 == 0);

    let arrayfinito = [];

    arrayfinito = arraydiprimi.concat(arrayNONmUltipli);

    return arraydiprimi;
    
}


function isPrimo(array) {

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
}

console.log(`IN array di partenza [ ${array} ] `);``

console.log(`OUT array modificato [ ${positivi(array)} ]`);