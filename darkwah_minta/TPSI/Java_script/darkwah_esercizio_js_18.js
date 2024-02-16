//GIUSTO


let num = [2, 4, 6]


function elev(n)
{
    let ris = n.map((item) => item ** 2)
    ris = ris.reduce((a, c) => a + c, 0)

    return ris
}


console.log(elev(num))