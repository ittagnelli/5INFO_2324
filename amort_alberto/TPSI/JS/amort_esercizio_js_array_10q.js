let cancella= function(array, can)
{
    let i=array.lastIndexOf(can);
    let arrayf=array.slice(0, i-1);
    arrayf.push(array.slice(i+1));
    return arrayf.join(" ");

}

let array= ["The", "quick", "brown", "fox",  "jumps",  "over",  "the", "lazy", "dog"];
console.log(cancella(array, "the"))