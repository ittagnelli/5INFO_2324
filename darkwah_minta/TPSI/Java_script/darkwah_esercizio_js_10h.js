/**/
let str = "Ciao Mondo la terra gira!!!";
let n = 10

function tronca(s, n)
{
    s = (s.slice(0,n)).concat("...")
    return s;
}



console.log(tronca(str, n))