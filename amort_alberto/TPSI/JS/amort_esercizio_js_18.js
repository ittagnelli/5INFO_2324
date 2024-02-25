let prodotto_quadrati=function (array)
{
    let prodotto=array.reduce((acc, counter) => acc * Math.pow(counter, 2), 1 );
    return prodotto; 

}

let array=[1,2,3,4,5,6];
console.log(prodotto_quadrati(array));