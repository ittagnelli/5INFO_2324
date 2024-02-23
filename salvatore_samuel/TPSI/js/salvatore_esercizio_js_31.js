function rimuovi(vett) {
    return Array.from(new Set(vett));
}

let vettore = [1, 1, 2, 2, 3, 3];
console.log(vettore, rimuovi(vettore));