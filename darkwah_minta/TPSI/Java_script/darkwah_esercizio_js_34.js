//GIUSTO

let n = 10;
let m = 5;

function crea_array(n, m)
{
    let valore = [];
    for (let i = 0; i < m; i++)
    {
        valore.push((Math.floor(Math.random() * n)) + 1)

    }

    valore.sort((a, b) => {return b - a})
    return valore
}

console.log(crea_array(n, m))