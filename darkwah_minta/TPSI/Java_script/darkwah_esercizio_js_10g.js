let str = "ciao mondo!!!";

function invert_case(s)
{
    let l, parte, frase = ""
    s = s.toUpperCase()
    parte = s.split(" ")
    for (let i= 0; i < parte.length; i++)
    {
        l = (parte[i].charAt(0)).toLowerCase()
        frase = frase.concat(l, parte[i].slice(1), " ")
    }
    return (frase)
}



console.log(invert_case(str))