let frase = "Facciamo tanti esercizi che ci fanno bene";
let frase2 = "JavaScript";
let N = 23;

function insert(frase, frase2, N){
    return frase.slice(0, N) + " " + frase2 + frase.slice(N);
}

console.log(insert(frase, frase2, N));