let vet = [1, 2, 3, 1, 2, 4];

function removeDuplicati(vet){
    let newVet = [];

    for (const element of vet) {
        if(!newVet.includes(element)) newVet.push(element)
    }

    return newVet;
}

let vet2 = removeDuplicati(vet);
console.log(vet2)