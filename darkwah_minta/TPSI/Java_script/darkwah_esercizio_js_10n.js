/**/
let str1 = "Facciamo tanti esercizi che ci fanno bene";
let str2 = "JavaScript"
let n = 23

function uscita(s1, s2, n)
{
    let parte
    parte = s1.slice(n)
    s1 = s1.slice(0, n)

    s1 = s1.concat(" ",s2, parte)
    return s1
}


console.log(uscita(str1, str2, n))