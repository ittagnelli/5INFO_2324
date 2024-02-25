//GIUSTO
let num = [1, 2, 3, 4]
let n = 3

function posizione (array, n)
{
    let ris = array.filter((value) => value != n)
    return ris
}

console.log(posizione(num, n))