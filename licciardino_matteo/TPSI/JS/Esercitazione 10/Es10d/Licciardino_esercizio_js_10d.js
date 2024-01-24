let frase = "ciamo mondo!!!"

function capitalize(frase) {
    return frase.replaceAll(frase[0].toLowerCase(), frase[0].toUpperCase());
}

console.log(capitalize(frase))