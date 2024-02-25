function binarioToDecimale(binario) {
    let risultato = 0;


    for (let i = binario.length - 1; i >= 0; i--) {
        risultato += parseInt(binario[i]) * Math.pow(2, binario.length - 1 - i);



    }
    return risultato;
}

let numBin = "101";
let ris = binarioToDecimale(numBin);
console.log(ris); 