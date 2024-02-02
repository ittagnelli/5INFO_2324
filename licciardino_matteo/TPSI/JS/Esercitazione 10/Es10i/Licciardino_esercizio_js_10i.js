let frase = "La programmazione creativa è fondamentale per lo sviluppo di soluzioni innovative."

function searchUnderstring(frase){
    let word = frase.split(" ");

    if(word.includes("coding") && word.includes("creativo")){
        return frase
    } else {
        return "Le parole non sono state trovate"
    }
}

console.log(searchUnderstring(frase))