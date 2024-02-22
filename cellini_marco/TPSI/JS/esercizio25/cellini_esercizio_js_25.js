const shuffle = (l, m) => {
    return l.filter((_, i) => i > m).concat(l.filter((_, i) => i < m));
};

let arr = Array.from(Array(7).keys());
console.log(`IN: ${arr}\nOUT: ${shuffle(arr, 3)}`)