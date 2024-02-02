/**/
let str1 = "Ciao ";
let str2 = "amico";


function uscita(s1, s2)
{
    let primo, secondo
    let unito = s1.concat(s2)
    primo = (s1.charAt(0)).concat(s2.slice(1))
    secondo = (s2.charAt(0)).concat(s1.slice(1))
    return primo.concat(" ",secondo)
}


console.log(uscita(str1, str2))