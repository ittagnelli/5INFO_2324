function confrontaOrari(ora1, ora2, ora3) {
    // Converte gli orari in secondi per semplificare il confronto
    const tempo1 = ora1.h * 3600 + ora1.m * 60 + ora1.s;
    const tempo2 = ora2.h * 3600 + ora2.m * 60 + ora2.s;
    const tempo3 = ora3.h * 3600 + ora3.m * 60 + ora3.s;

    // Trova il minimo tra i tre tempi
    const minimoTempo = Math.min(tempo1, tempo2, tempo3);

    // Converte il minimo tempo di nuovo in orario
    const minimoOra = {
        h: Math.floor(minimoTempo / 3600),
        m: Math.floor((minimoTempo % 3600) / 60),
        s: minimoTempo % 60
    };

    return minimoOra;
}

// Esempio di utilizzo
const orario1 = { h: 12, m: 30, s: 45 };
const orario2 = { h: 10, m: 15, s: 30 };
const orario3 = { h: 14, m: 5, s: 20 };

const orarioMinimo = confrontaOrari(orario1, orario2, orario3);
console.log("Orario minimo:", orarioMinimo);
