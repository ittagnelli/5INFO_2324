const between = (l, n, m) => {
    return l.filter(e => e >= n && e <= m);
};

let arr = Array.from(Array(20).keys());
console.log(`IN: ${arr}\nOUT: ${between(arr, 15, 18)}`);