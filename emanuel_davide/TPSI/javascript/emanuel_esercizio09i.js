function trovaMaggioreTraTre(num1, num2, num3) {
    return num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
}

// Esempio di utilizzo
const numero1 = 15;
const numero2 = 9;
const numero3 = 12;

const maggiore = trovaMaggioreTraTre(numero1, numero2, numero3);
console.log(`Il numero maggiore tra ${numero1}, ${numero2} e ${numero3} è: ${maggiore}`);
