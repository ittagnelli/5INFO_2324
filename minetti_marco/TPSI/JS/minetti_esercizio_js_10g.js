let mesi = ["Marzo", "Giugno", "Gennaio", "Dicembre", "Aprile"];

function compare(a, b) {
    let ord = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Marzo", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    return ord.indexOf(a) - ord.indexOf(b);
}

console.log("Mesi dell'anno:", mesi.sort(compare));