function quadrati(array){

    return array.reduce((accumulatore, numero) => accumulatore * (numero * numero), 1);
}

let array=[1,2,3,4,5];

console.log(quadrati(array))