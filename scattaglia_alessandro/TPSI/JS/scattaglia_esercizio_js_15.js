function search_num(array, N) {
    if (array.includes(N)) {
        let indice = array.indexOf(N);
        array.splice(indice, 1);
        console.log(array);
    }
}


let array = [1, 2, 3, 4];
search_num(array, 3);
