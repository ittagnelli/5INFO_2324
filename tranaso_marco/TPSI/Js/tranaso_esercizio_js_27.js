function duplicati(array){
    return array.filter((elemento, indice) => array.indexOf(elemento) == indice);
}

let array=[1,2,3,1,2,4];

console.log(duplicati(array))