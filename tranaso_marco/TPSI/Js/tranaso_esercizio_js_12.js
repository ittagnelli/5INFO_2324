function cofronta(array1,array2){

    return array1.every((element, index)=>element ==array2[index]);

}

array1=[1,2,3];
array2=[1,2,4];

console.log(cofronta(array1,array2));