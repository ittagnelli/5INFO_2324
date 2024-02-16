let crea_array=function(array, N)
{
    array=array.slice(-N);
    return array;
}

let array=[1,2,3,4,5,6,12, 13, 55, 13];
console.log(crea_array(array, 4));