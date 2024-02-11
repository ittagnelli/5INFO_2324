let vet = [1, 4, 7, 3, 11, 12, 20]

function isPrimo(num){
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function ordVet(vet){
    let primero = vet.filter(num => isPrimo(num));
    let nonPrimero = vet.filter(num => !isPrimo(num));

    return [...primero, ...nonPrimero]
}

let newVet = ordVet(vet);
console.log(newVet)