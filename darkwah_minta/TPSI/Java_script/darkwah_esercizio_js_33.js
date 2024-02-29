let frase = "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";

function countWord(frase){
    let punteggiatura = ['.', ',', ';', ':', '!', '?', '"'];

    for(let i = 0; i < punteggiatura.length; i++)
    {
        frase = frase.split(punteggiatura[i]).join('');
    }

    let word = frase.split(" ");
    new Set(word)

    let unico = [...word];

    let c = new Map();

    unico.forEach(unique => {
        c.set(unique, word.filter(letter => letter === unique).length);
    })

    for(let [k, v] of c){
        console.log('La parola "' + k + '" ha frequenza: ' + v);
    }
}

countWord(frase)