function reverse(array) {

    let array_invertito = [];

    array_invertito = array.map((valore) => array[array.length - 1 - array.indexOf(valore)]);

    console.log(array_invertito);


}

let array = [1, 2, 3, 4, 5, 6];

reverse(array);
