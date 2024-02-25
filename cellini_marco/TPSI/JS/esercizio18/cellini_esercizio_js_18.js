const prod_pow2 = (n) => {
    return n.reduce((acc, e) => acc *= Math.pow(+e, 2), 1);
};

let numerbs = [1, 2, 3, 4, 5];
console.log(`Prodotto dei quadrati\nIN: ${numerbs}\nOUT: ${prod_pow2(numerbs)}`);