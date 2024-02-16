let insert= function(array, stringa, N)
{
    let arrayf=array.slice(0, N);
    arrayf.push(stringa);
    arrayf.push(array.slice(N));
    console.log(arrayf.join(" "));

}

let array= ["Facciamo", "tanti", "esercizi", "che", "ci", "fanno", "bene"];
console.log(insert(array, "Javascript", 23));