fibonacci = function (x) {
    a = 0;
    b = 1;
    for(i=1; i<x; i++){
        b = a + b;
        a = b - a;
    }
    return(b);
}

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(9));
console.log(fibonacci(15));