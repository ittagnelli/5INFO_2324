let frase = "Ciao Mondo la terra gira!!!";
let L = 10;

function tronca(frase, L) {
    return frase.substring(0, L) + "...";
}

console.log(tronca(frase, L));