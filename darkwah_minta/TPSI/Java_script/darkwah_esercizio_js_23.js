//GIUSTO


let binario = "11011"


function bin_dec(b) {
    let ele = b.length - 1
    let somma = 0
    for (let n of binario) {
        somma += n * 2** ele
        ele--
    }
    return somma
}





console.log(bin_dec(binario))

