function isPrime (n) {
    let j = 0;
    for(i = 2; i < n; i++) {
        if(n % i == 0) {
            j++;
        }
    }
    return j ? false : true;
}

let str = [1, 4, 7, 3, 11, 12, 20];
let prime = str.filter((item) => isPrime(item)).sort((a, b) => a - b);
let intersection = str.filter(item => !prime.includes(item)).sort((a, b) => a - b);
console.log(prime.concat(intersection))