let frase = "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";

function countWord(frase){
    let punteggiatura = ['.', ',', ';', ':', '!', '?', '"'];

    for(let i = 0; i < punteggiatura.length; i++){
        frase = frase.split(punteggiatura[i]).join('').toLowerCase();
    }

    let word = frase.split(" ");

    let unico = [...new Set(word)];

    let count = new Map();

    unico.forEach(unique => {
        count.set(unique, word.filter(letter => letter === unique).length);
    })

    for(let [k, v] of count){
        console.log('La parola "' + k + '" ha frequenza: ' + v);
    }
}

countWord(frase)