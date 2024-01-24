let frase = "Nel mezzo del cammin di nostra vita"

function untokenize(frase) {
    return frase.replaceAll(" ", "-");
}

console.log(untokenize(frase))