const map_arr = (l, n) => {
    return l.map(e => +e % n == 0 && +e != 0 ? e = 0 : e = e);
};

let numbers = Array.from(Array(100).keys());
console.log(`IN; ${numbers}\nOUT: ${map_arr(numbers, 5)}`);