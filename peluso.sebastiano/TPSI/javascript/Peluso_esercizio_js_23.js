

let binario = "111100";

function calcola(binario) {

    let arrayBinario = binario.split("").map(Number).reverse();
    

    let decimale = arrayBinario.reduce((acc,current,i) => acc + current * Math.pow(2,i),0);

    return decimale;
    
}
console.log("IN binario ", binario);
console.log("OUT decimale ", calcola(binario));