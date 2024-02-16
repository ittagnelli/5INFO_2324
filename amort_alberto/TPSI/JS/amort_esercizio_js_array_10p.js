let insert=function(array, N)
{
    for(i=array.length; i>N; i--)
    {
        array.pop();

    }

    array.push(" ...")
    return array.join(" ");
}

let array= ["Facciamo",  "tanti", "esercizi", "che", "ci","fanno", "bene"];
console.log(insert(array, 3));