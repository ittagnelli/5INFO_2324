function confrontaArray(array1, array2) {


    return array1.every((e, i) => e === array2[i]);
}


let arrayA = [1, 2, 3];
let arrayB = [1, 2, 4];


console.log(confrontaArray(arrayA, arrayB));
