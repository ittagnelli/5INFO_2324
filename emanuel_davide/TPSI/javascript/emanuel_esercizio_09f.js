function fibonacci(n) {
    if (n <= 0) {
        return "Il parametro deve essere un numero intero positivo.";
    } else {
        let a = 0, b = 1;
        for (let i = 3; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}

// Esempio di utilizzo
let num = 20; // Puoi sostituire questo valore con qualsiasi altro numero intero
let ris = fibonacci(num);
console.log(`Il ${num}-esimo numero della serie di Fibonacci è: ${ris}`);