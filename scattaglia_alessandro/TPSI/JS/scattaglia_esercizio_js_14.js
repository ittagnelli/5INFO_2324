function sposta_elemento(array, n, m) {
    let array_copia = array.slice();

    if (n < m) {
        let elemento = array_copia.splice(n, 1)[0];
        array_copia.splice(m, 0, elemento);
    } else {

        let elemento = array_copia.splice(n, 1)[0];
        array_copia.splice(m, 0, elemento);
    }

    return array_copia;
}

let array = [10, 20, 30, 40, 50];
console.log(sposta_elemento(array, 0, 2));
