const max = (a, b, c) => {return a > b && a > c ? a : (b > a && b > c ? b : c)};

console.log(`5, 2 e 6 max:\t${max(5, 2, 6)}`);
console.log(`34, 122 e 50 max:\t${max(34, 122, 50)}`);
console.log(`0, 5 e -12 max:\t${max(0, 5, -12)}`);