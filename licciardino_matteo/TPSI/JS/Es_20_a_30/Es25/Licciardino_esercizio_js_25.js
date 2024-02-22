let vet = [1, 2, 3, 4, 5, 6, 7]
let index = 3

function invertArray(vet, index){
    let primaParte = vet.slice(0, index)
    let secondaParte = vet.slice(index + 1)

    return secondaParte.concat(primaParte)
}

let newVet = invertArray(vet, index)
console.log(newVet)