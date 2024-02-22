function differenzaOrari(orario1, orario2) {
    const t1 = orario1.h * 3600000 + orario1.m * 60000 + orario1.s * 1000;
    const t2 = orario2.h * 3600000 + orario2.m * 60000 + orario2.s * 1000;
  
    const diffMillisecondi = Math.abs(t1 - t2);
    const diffSecondi = diffMillisecondi / 1000;
    const diffMinuti = diffSecondi / 60;
    const diffOre = diffMinuti / 60;
  
    return {
      millisecondi: diffMillisecondi,
      secondi: diffSecondi,
      minuti: diffMinuti,
      ore: diffOre
    };
  }
  
  const orario1 = { h: 24, m: 0, s: 0 };
  const orario2 = { h: 0, m: 0, s: 0 };

  
  const risultato1 = differenzaOrari(orario1, orario2);
  
  console.log("Differenza tra orario1 e orario2:", risultato1);
  
  