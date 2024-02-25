function contaParole(testo) {
    let parole_clean=testo.replace(".", " ").split(" ");
    let frequenze=new Map();

    parole_clean.forEach(parola => {
        parola.toLowerCase();
        if (frequenze.has(parola)) {
            frequenze.set(parola, frequenze.get(parola) + 1);
        } else {
            frequenze.set(parola, 1);
        }
    });
    frequenze.forEach((contatore, parola) => {
        console.log(`La parola" "${parola}" ha frequenza: ${contatore}`);
    });
}

let testoInput="JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";
contaParole(testoInput);
