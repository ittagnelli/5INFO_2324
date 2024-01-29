// Funzione principale che accetta due numeri e una funzione di callback
function eseguiOperazione(num1, num2, callback) {
    // Verifica che i parametri di input siano numeri
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return "Entrambi i parametri devono essere numeri";
    }
  
    // Esegui la funzione di callback passando i due numeri come argomenti
    const risultato = callback(num1, num2);
  
    // Restituisci il risultato
    return risultato;
  }
  
  // Esempio di funzione di callback: somma
  function somma(a, b) {
    return a + b;
  }
  
  // Esempio di funzione di callback: differenza
  function differenza(a, b) {
    return a - b;
  }
  
  // Esempio di utilizzo
  const numero1 = 10;
  const numero2 = 5;
  
  // Utilizza la funzione eseguiOperazione con la funzione di callback 'somma'
  const risultatoSomma = eseguiOperazione(numero1, numero2, somma);
  console.log(`Somma: ${risultatoSomma}`);
  
  // Utilizza la funzione eseguiOperazione con la funzione di callback 'differenza'
  const risultatoDifferenza = eseguiOperazione(numero1, numero2, differenza);
  console.log(`Differenza: ${risultatoDifferenza}`);
  