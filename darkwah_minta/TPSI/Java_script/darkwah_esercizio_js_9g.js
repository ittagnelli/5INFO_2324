function minore(array)
{
    let min = array[0]
    for (let i = 0; i < 3; i++)
    {
        
        array[i] < min ? min = array[i] : min = min

    }
    return min
}

let utente1 = {
    ore: 12,
    minuti: 30,
    secondi: 20,
}

let utente2 = {
    ore: 11,
    minuti: 22,
    secondi: 34,
}

let utente3 = {
    ore: 14,
    minuti: 4,
    secondi: 55,
}

let funz = [utente1["ore"], utente2["ore"], utente3["ore"]]

console.log("L'orario minore è: " + minore(funz));
