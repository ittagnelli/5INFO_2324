let mesi = ["Marzo", "Giugno", "Gennaio", "Dicembre", "Aprile"];

function ordinamento(a, b) {
    let dizionario = {
        "Gennaio": 1,
        "Febbraio": 2,
        "Marzo": 3,
        "Aprile": 4,
        "Maggio": 5,
        "Giugno": 6,
        "Luglio": 7,
        "Agosto": 8,
        "Settembre": 9,
        "Ottobre": 10,
        "Novembre": 11,
        "Dicembre": 12
    };
    return dizionario[a] - dizionario[b];
}

console.log("Mesi dell'anno in disordine:", mesi);

let new_order = mesi.sort((m1, m2) => ordinamento(m1, m2));

console.log("Mesi dell'anno in ordine:", new_order);