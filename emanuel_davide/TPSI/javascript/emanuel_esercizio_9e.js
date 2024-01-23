function calcolaDifferenzaOrari(orario1, orario2) {
  // Converti gli orari in millisecondi
  const msOrario1 = orario1.h * 3600000 + orario1.m * 60000 + orario1.s * 1000;
  const msOrario2 = orario2.h * 3600000 + orario2.m * 60000 + orario2.s * 1000;

  // Calcola la differenza in millisecondi
  const differenzaInMs = Math.abs(msOrario1 - msOrario2);

  // Calcola la differenza in secondi, minuti e ore
  const differenzaInSecondi = differenzaInMs / 1000;
  const differenzaInMinuti = differenzaInMs / 60000;
  const differenzaInOre = differenzaInMs / 3600000;

  // Restituisci i risultati
  return {
    differenzaInMs,
    differenzaInSecondi,
    differenzaInMinuti,
    differenzaInOre
  };
}
  
  
  const orario1 = { h: 10, m: 30, s: 15 };
  const orario2 = { h: 12, m: 45, s: 30 };
  
  const differenze = calcolaDifferenzaOrari(orario1, orario2);
  
  console.log("Differenza in millisecondi:", differenze.differenzaInMs);
  console.log("Differenza in secondi:", differenze.differenzaInSecondi);
  console.log("Differenza in minuti:", differenze.differenzaInMinuti);
  console.log("Differenza in ore:", differenze.differenzaInOre);
  