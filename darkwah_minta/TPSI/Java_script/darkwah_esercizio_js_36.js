//GIUSTO

let stringa = "supercalifragilistichespiralidoso"

function occo_vocali(s)
{
    s = [...s]
    let vocali = new Map([["a", 0],["e", 0],["i", 0],["o", 0],["u", 0]])
    let cont = 0

    for (let [voc, v] of vocali)
    {
        for (let lett of s)
        {
            if (lett == voc)
            {
                vocali.set(lett, vocali.get(lett) + 1)
            }
        }
    
    }
    

    return vocali
    
}

console.log(occo_vocali(stringa))