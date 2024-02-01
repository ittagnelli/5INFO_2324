/**/
let str = "E' come il coding creativo!";


function uscita(s)
{
    if (s.includes("coding") && s.includes("creativo"))
    {
        return s
    }
    else
    {
        return "Parole non trovate"
    }
}


console.log(uscita(str))