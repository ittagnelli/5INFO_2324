function tronca(stringa, lunghezza) {
    if (stringa.length <= lunghezza) {
      return stringa; 
    } else {
      return stringa.slice(0, lunghezza) + "..."; 
    }
  }
  
  const stringa = "Ciao Mondo la terra gira.";
  const lunghezzaDesiderata = 10;
  const stringaTroncata = tronca(stringa, lunghezzaDesiderata);
  console.log(stringaTroncata);
  