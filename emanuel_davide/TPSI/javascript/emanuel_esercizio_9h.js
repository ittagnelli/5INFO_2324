function trovaMaggiore(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Esempio di utilizzo
const numero1 = 10;
const numero2 = 7;

const maggiore = trovaMaggiore(numero1, numero2);
console.log(`Il numero maggiore tra ${numero1} e ${numero2} è: ${maggiore}`);
