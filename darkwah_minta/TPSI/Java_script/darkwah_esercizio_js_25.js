//GIUSTO

let num = [1, 2, 3, 4, 5, 6, 7]
let n = 3


function sposta (num, n)
{
    let prendi = num.splice(n)
    prendi.shift()
    
    return (prendi.concat(num))
}



console.log(sposta(num, n))