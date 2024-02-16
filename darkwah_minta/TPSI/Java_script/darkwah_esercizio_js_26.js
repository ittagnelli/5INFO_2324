//GIUSTO

let n = 5

let num



function casu_inv(num, n)
{
    let ris = []
    let ris_inv = []
    for (let i = 0; i < n; i++)
    {
        num = Math.floor(Math.random() * 15)
        ris.push(num)
        

    }
    ris_inv = Array.from(ris)
    ris_inv.reverse()
    return ("Array normale: " + ris + "\n" + "Array invertito: " + ris_inv)

}

console.log(casu_inv(num, n))