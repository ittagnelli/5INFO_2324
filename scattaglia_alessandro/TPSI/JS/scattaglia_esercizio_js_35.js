function rimuoviDuplicati(stringa) {
    let caratteriUnici = new Set(stringa);

    return Array.from(caratteriUnici).join('');
}
let stringa = "ciaociaooooooooooooo";
console.log(rimuoviDuplicati(stringa)); 
