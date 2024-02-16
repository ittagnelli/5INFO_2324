//GIUSTO

let num = [2, 4, 3, 6, 4, 7]
let n = 3
let m = 5


function restituire(num, n, m)
{
    let prima = num.filter((values) => values >= n)
    let dopo = num.filter((values) => values <= m)

    return "Prima: " + prima + "\n" + "Dopo: " + dopo
}


console.log(restituire(num, n, m))