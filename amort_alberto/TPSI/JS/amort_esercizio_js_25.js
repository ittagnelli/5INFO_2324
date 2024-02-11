let invert_sub= function(array, N, M)
{
    let sub1=array.slice(0, M);
    let sub2=array.slice(M+1, N);
    array= sub2.concat(sub1);
    return array;
}

let array=[1,2,3,4,5,6,7]
let index=3;
console.log(invert_sub(array, array.length, index));