let a = 100
let b = 22
let c = 55

function maggiore (pr, sec, trz)
{
    let max = 0
    pr > max ? max = pr: max = max
    sec > max ? max = sec: max = max
    trz > max ? max = trz: max = max

    return max
}

console.log("Il numero maggiore è: " + maggiore(a, b, c))
a = 55
b = 35
c = 76
console.log("Il numero maggiore è: " + maggiore(a, b, c))
a = 33
b = 78
c = 31
console.log("Il numero maggiore è: " + maggiore(a, b, c))
