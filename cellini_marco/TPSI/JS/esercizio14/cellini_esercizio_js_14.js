const swap = (l, n, m) => {
    l.splice(m + 1, 0, l.at(n));
    l.splice(n, 1);
    return l;
};

let arr = [10, 20, 30, 40, 50];
console.log(`IN: ${arr}\nOUT: ${swap(arr, 0, 2)}`);