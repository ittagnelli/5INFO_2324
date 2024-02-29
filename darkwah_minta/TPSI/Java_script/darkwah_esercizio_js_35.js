//GIUSTO

let stringa = "supercalifragilistichespiralidoso"

function no_duplicati(s)
{
    s = new Set(s)
    
    return [...s].join("")
}

console.log(no_duplicati(stringa))