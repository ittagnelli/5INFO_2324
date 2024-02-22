let orario = {
    Ora: 12,
    Minuti: 10,
    Secondi: 19
};

let orario2 = {
    Ora: 14,
    Minuti: 12,
    Secondi: 21
};

let orario3 = {
    Ora: 10,
    Minuti: 30,
    Secondi: 45
};

let orario4 = {
    Ora: 12,
    Minuti: 45,
    Secondi: 50
};

let calDiffhoras = (orario1, orario2) => {
    let msOrario1  = orario1.Ora * 60 * 60 * 1000 + orario1.Minuti * 60 * 1000 + orario1.Secondi * 1000;
    let msOrario2 = orario2.Ora * 60 * 60 * 1000 + orario2.Minuti * 60 * 1000 + orario2.Secondi * 1000;

    let diffMs = Math.abs(msOrario2 - msOrario1);
    let diffS = diffMs / 1000;
    let diffM = diffS / 60;
    let diffH = diffM / 60;

    return {
        millisecondi: diffMs,
        secondi: diffS,
        minuti: diffM,
        ore: diffH,
    }
}

let main = () => {
    let ris_1 = calDiffhoras(orario, orario2);
    console.log(`Differenza tra due orari: \n con i millisecondi ${ris_1.millisecondi}, 
                                           \n con i secondi ${ris_1.secondi}, 
                                           \n con i minuti ${ris_1.minuti},
                                           \n con le ore ${ris_1.ore},`);
    
    let ris_2 = calDiffhoras(orario3, orario4);
    console.log(`Differenza tra due orari: \n con i millisecondi ${ris_2.millisecondi}, 
                                           \n con i secondi ${ris_2.secondi}, 
                                           \n con i minuti ${ris_2.minuti},
                                           \n con le ore ${ris_2.ore},`);
}

main()