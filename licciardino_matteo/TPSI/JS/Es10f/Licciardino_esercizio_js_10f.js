let frase = "ciamo mondo!!!"

function upper_case(frase) {
    let ris = "";

    for(let i = 0; i < frase.length; i++){
        let characterAscii = frase[i].charCodeAt(0);

        // vedere se il carattere è in minuscolo nella tabella ASCII
        if ((characterAscii >= 97) && (characterAscii <= 122)) characterAscii -= 32;
        
        ris += String.fromCharCode(characterAscii);
    }

    return ris;
}

console.log(upper_case(frase)); 