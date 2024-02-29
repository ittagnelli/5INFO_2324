//GIUSTO

let num = [1, 2, 1, 3, 3, 4, 7]


function duplicati (n)
{
    n = new Set(n)
    n = Array.from(n)

    return n
}


console.log(duplicati(num))