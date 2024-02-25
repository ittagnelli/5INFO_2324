function invertiSottoarray(array, M) {
    const sottoarray1 = array.slice(0, M);
    const sottoarray2 = array.slice(M + 1, array.length).reverse();
    const risultato = sottoarray1.concat(array[M], sottoarray2);
    return risultato;
}

const array = [1,2,3,4,5,6,7];
const M = 3;
console.log(invertiSottoarray(array, M)); 
