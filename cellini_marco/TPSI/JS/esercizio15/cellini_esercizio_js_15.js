const without = (l, n) => {
    return l.filter(e => e != n);
};

let arr = [1, 2, 3, 4, 5];
console.log(`IN: ${arr}\nOUT: ${without(arr, 3)}`)