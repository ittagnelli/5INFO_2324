/**/
let str = "Facciamo tanti esercizi che ci fanno bene";
let n = 3

function uscita(s, n)
{
    s = s.split(" ")
    s = s.slice(0,n)

    let frase = ""
    for (let i = 0; i <s.length;i++)
    {
        frase = frase.concat(s[i], " ")
    }
    
    return frase
}


console.log(uscita(str, n))