let utente1 = {
    ore: 12,
    minuti: 30,
    secondi: 20,
}

let utente2 = {
    ore: 10,
    minuti: 22,
    secondi: 34,
}

function diff(primo, secondo)
{

    let ms_ = secondo.secondi - primo.secondi
    let sec_ = secondo.secondi - primo.secondi
    let min_ = secondo.minuti - primo.minuti
    let ore_ = secondo.secondi - primo.secondi

    let conc = ms_ + " " + sec_ + " " + min_ + " " + ore_
    return (conc);
}


console.log(diff(utente1, utente2))