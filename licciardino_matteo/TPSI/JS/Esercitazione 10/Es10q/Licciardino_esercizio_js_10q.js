let frase = "The quick brown fox jumps over the lazy dog";
let frase2 = "the";

function removeOccorrenza(frase, frase2){
    let pos = frase.indexOf(frase2);

    if(pos !== -1){
        let start = frase.substring(0, pos);
        let end = frase.substring(pos + frase2.length);
        frase = start + end;
    }

    return frase
}

console.log(removeOccorrenza(frase, frase2));