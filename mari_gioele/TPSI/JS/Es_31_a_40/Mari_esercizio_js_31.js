let vet = [1, 2, 3, 1, 2, 4];

function removeDuplicati(vet){
    let insieme = new Set(vet);

    let newVet = Array.from(insieme);

    return newVet;
}

let vet2 = removeDuplicati(vet)
console.log(vet2)