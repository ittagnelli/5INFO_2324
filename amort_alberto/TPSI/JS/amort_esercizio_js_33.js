let occorenze=function(stringa)
{
    let punteggiatura = ['.', ',', ';', ':', '!', '?', '"'];

    for(let i = 0; i < punteggiatura.length; i++){
        stringa = stringa.split(punteggiatura[i]).join('');
    }

    frase=stringa.split(" ");

    let set=[...new Set(frase)];

    let occorenza= new Map();


    set.forEach(i =>  {occorenza.set(i, frase.filter(letter=> letter===i).length) });

    for(let [k, v] of occorenza)
    {
        console.log(`La parola "${k}" ha frequenza; ${v}`);
    }



}

let stringa="JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";
occorenze(stringa);
