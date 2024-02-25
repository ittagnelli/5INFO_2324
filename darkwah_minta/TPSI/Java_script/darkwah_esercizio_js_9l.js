let a = 1
let b = 4

let ris = 0
function add(a, b)
{
    ris = a + b
    return (">> La somma è: " + ris)
}


function prod(a, b)
{
    ris = a * b
    return (">> Il prodotto è: "+ ris)
}


function pot(a, b)
{
    ris = a ** b
    return (">> La potenza è: " + ris)
}



console.log(add(a, b), "\n")

a = 7
b = 3
console.log(prod(a, b), "\n")

a = 2
b = 6
console.log(pot(a, b), "\n")