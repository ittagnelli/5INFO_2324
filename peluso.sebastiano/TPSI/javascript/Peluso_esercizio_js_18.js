
let array = [1,2,3,4,5,6];

function prodottoQuadrati(array) {

    let array_Quadrato = [];

    array_Quadrato = array.map((value) => value ** 2 );

    let prodotto = array_Quadrato.reduce((acc, current) => acc * current, 1);

    return prodotto;
    
}

console.log("il prodotto delle potenze è:  ", prodottoQuadrati(array));



