function stampa_genera(N) {
    
    let array;
    for (let i = 0; i < N; i++) {
        array.push(Math.floor(Math.random() * 100));
    }

    console.log("Array originale", array);
    console.log("Array invertito", array.slice().reverse());
}
const N = 5;
stampa_genera(N);
