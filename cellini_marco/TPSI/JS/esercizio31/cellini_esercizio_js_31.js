const unique = (l) => {
    return Array.from(new Set(l));
};

let n = [1, 2, 3, 4, 1, 3, 6];
console.log(`IN: ${n}\nOUT: ${unique(n)}`);