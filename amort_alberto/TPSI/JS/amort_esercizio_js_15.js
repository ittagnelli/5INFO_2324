let cancella= function(array, N)
{
    while(array.indexOf(N)!=-1)
    {
        array=(array.slice(0, array.indexOf(N))).concat(array.slice(N));
    }
    return array;
}

let array=[1,2,3,4];
console.log(cancella(array, 3));
