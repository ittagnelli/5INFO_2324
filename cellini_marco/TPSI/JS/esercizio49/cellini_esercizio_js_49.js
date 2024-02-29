class Fibonacci {
    constructor() {
        this.n1 = 0;
        this.n2 = 1;
    }

    cal_n_fib(n) {
        if (n == 3) 
            return this.n1 + this.n2;

        if (n <= 2 && n == 1) return this.n1; else if (n <= 2) return this.n2;
        
        this.n1 > this.n2 ? this.n2 = this.n1 + this.n2 : this.n1 = this.n1 + this.n2;
        return this.cal_n_fib(--n);
    }
}

let fib = new Fibonacci();

console.log(fib.cal_n_fib(8));
fib = new Fibonacci();
console.log(fib.cal_n_fib(5));
fib = new Fibonacci();
console.log(fib.cal_n_fib(9));
fib = new Fibonacci();
console.log(fib.cal_n_fib(21));
fib = new Fibonacci();
console.log(fib.cal_n_fib(100));