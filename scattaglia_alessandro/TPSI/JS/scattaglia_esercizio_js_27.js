function duplicati(array) {

    console.log(array.filter((elemento, indice) => array.indexOf(elemento) == indice));
}

let array = [1, 1, 1, 2, 3, 11, 2, 3]
duplicati(array);