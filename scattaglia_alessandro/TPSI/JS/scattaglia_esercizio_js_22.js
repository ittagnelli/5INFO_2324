function prima_primi(arr) {
    let isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++)
            if (num % i === 0) return false;
        return num > 1;
    };

    let primi = arr.filter(isPrime);
    let non_primi = arr.filter(num => !isPrime(num));

    return primi.concat(non_primi);
}

let array = [4, 7, 9, 12, 15, 17, 3, 20];
console.log(prima_primi(array)); 
