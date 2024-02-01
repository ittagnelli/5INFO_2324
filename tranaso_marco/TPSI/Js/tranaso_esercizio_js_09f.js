function fibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
function main() {
    const numeri = [5, 8, 10, 15, 20]; 

    numeri.forEach((numero) => {
        const result = fibonacci(numero);
        console.log(`Fibonacci(${numero}) = ${result}`);
    });
}

main();