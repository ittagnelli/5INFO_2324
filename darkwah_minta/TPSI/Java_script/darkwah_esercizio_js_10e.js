let str = "ciao mondo la terra gira!!!"

function capitalize_all(str)
{
    let parte = str.split(" ")
    let l
    let frase = ""
    for (let i = 0; i < parte.length; i++)
    {
        l = (parte[i].charAt(0)).toUpperCase()

        frase = frase.concat(l, parte[i].slice(1), " ")
        
    }
    return frase
}

console.log(capitalize_all(str))