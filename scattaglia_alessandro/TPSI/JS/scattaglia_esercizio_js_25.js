function modifica_array(array, M) {
    let array2;
    array2 = array.slice(0, M);


    let array3 = array.slice(M + 1, array.lenght).reverse();

    console.log(array3.concat(array2));

}

let array = [1, 2, 3, 4, 5, 6, 7];


modifica_array(array, 3);
