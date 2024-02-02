/**/
let str = "Facciamo tanti esercizi che ci fanno bene";
let n = 10

function tronca(s, n)
{
    s = s.substring(0,n)
    return s + "...";
}



console.log(tronca(str, n))