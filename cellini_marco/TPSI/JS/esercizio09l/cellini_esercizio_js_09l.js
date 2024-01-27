const pow = (b, e) => { return b**e; }

const sum = (a, b) => { return a + b; }

const prod = (a, b) => { return a * b; }

const operatoration = (a, b, s) => {
    return s(a, b);
};

console.log(`3 + 4 = ${operatoration(3, 4, sum)}`);
console.log(`3 * 4 = ${operatoration(3, 4, prod)}`);
console.log(`3^4 = ${operatoration(3, 4, pow)}`);