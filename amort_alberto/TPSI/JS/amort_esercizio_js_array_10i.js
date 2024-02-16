let cerca_parole=function(array)
{
    if(array.includes("coding") && array.includes("creativo"))
    {
        return array.join(" ");
    } 
    else
    {
        return "parole non trovate";
    }

}


let array= ["Questo", "nuovo", "programma", "di", "coding", "è", "molto", "creativo"];
console.log(cerca_parole(array));