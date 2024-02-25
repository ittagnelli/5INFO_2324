let num = [10, 20, 30, 40, 50]

let n = 0;
let m = 2;


function sposta(array, n, m)
{
    let tolto = array.splice(n, 1)

    let tolto2 = array.splice(m)
    let ris = []
    ris = array.concat(tolto)
    ris = ris.concat(tolto2)

    return ris
}


console.log(sposta(num, n, m))

