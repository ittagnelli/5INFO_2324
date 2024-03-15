function contaOccorrenzeVocali(stringa) {
    let vocali = ['a', 'e', 'i', 'o', 'u'];
    let occorrenzeVocali = new Map();

    for (let carattere of stringa) {
        if (vocali.includes(carattere)) {
            occorrenzeVocali.set(carattere, (occorrenzeVocali.get(carattere) || 0) + 1);
        }
    }

    return occorrenzeVocali;
}

let stringa = "aiuola";
console.log(contaOccorrenzeVocali(stringa));
