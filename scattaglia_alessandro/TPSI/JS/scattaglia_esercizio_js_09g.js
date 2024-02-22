let utente1 = {
    ore: 18,
    minuti: 1,
    secondi: 33
};
let utente2 = {
    ore: 21,
    minuti: 59,
    secondi: 58
};
let utente3 = {
    ore: 18,
    minuti: 1,
    secondi: 12
};

let minore = utente1;

if (
    utente2.ore < minore.ore ||
    (utente2.ore === minore.ore && utente2.minuti < minore.minuti) ||
    (utente2.ore === minore.ore && utente2.minuti === minore.minuti && utente2.secondi < minore.secondi)
) {
    minore = utente2;
}

if (
    utente3.ore < minore.ore ||
    (utente3.ore === minore.ore && utente3.minuti < minore.minuti) ||
    (utente3.ore === minore.ore && utente3.minuti === minore.minuti && utente3.secondi < minore.secondi)
) {
    minore = utente3;
}

console.log("User with the minimum time:", minore);
