const n_fib = (n) => {
    let a = 0, b = 1;
    while (n-- != 0) {
        a > b ? b = a + b : a = a + b; 
    }
    return a > b ? b : a;
};

console.log(`5 --> ${n_fib(5)}`);
console.log(`7 --> ${n_fib(7)}`);
console.log(`3 --> ${n_fib(3)}`);
console.log(`21 --> ${n_fib(21)}`);
console.log(`93 --> ${n_fib(93)}`);