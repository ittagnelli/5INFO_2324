    // Arrow function per l'addizione
const somma = (a, b) => a + b;

// Arrow function per la sottrazione
const differenza = (a, b) => a - b;

// Arrow function per la moltiplicazione
const moltiplicazione = (a, b) => a * b;

// Arrow function per la divisione
const divisione = (a, b) => {
  // Verifica che il denominatore non sia zero per evitare divisione per zero
  if (b !== 0) {
    return a / b;
  } else {
    return "Impossibile dividere per zero";
  }
};

// Esempio di utilizzo delle arrow functions
const numero1 = 10;
const numero2 = 5;

console.log(`Somma: ${somma(numero1, numero2)}`);
console.log(`Differenza: ${differenza(numero1, numero2)}`);
console.log(`Moltiplicazione: ${moltiplicazione(numero1, numero2)}`);
console.log(`Divisione: ${divisione(numero1, numero2)}`);
