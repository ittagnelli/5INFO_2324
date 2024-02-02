/**/
let str = "The quick brown fox jumps over the lazy dog";
let c = "the"

function uscita(s, c)
{
    s = s.replace(c,"")
    return s
}


console.log(uscita(str, c))