let mesi = ["Marzo", "Giugno", "Gennaio", "Dicembre", "Aprile"];

const sortMese = (a, b) => {
    const mese = [
        "Gennaio" = 1,
        "Febbraio" = 2,
        "Marzo" = 3,
        "Aprile" = 4,
        "Maggio" = 5,
        "Giugno" = 6,
        "Luglio" = 7,
        "Agosto" = 8,
        "Settembre" = 9,
        "Ottobre" = 10,
        "Novembre" = 11,
        "Dicembre" = 12,
    ];

    return mese[a] - mese[b];
}

let ordinati = mesi.sort(sortMese);

console.log(ordinati);