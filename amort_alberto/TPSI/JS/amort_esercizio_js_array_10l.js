
let concatenazione= function(array1, array2)
{
    let arrayfin;

    array1.forEach(item => arrayfin.push(item));
    arrayfin.at(0)=array2.at(0);
    array2.at(0)=array1.at(0);
    arrayfin.push(" ");
    arrayfin= arrayfin.concat(array2);
    return arrayfin.join("");
}

array1=["C", "i", "a", "o"];
array2=["P", "r", "o", "f"];

console.log(concatenazione(array1, array2));