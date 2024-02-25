let crea_array= function(array, N, M)
{
    let arrayf=array.filter((item) => item>=N && item<=M);

    return arrayf;
}

let array=[3,6,14,8,4,12, 9];
let N=2;
let M=8;
console.log(crea_array(array, N, M));