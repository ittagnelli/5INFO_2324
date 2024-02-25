const occorrenze = (s) => {
    let map = new Map([['a', 0], ['e', 0], ['i', 0], ['o', 0], ['u', 0]]);
    s.split('').map(e => {map.has(e) ? map.set(e, map.get(e) + 1) : null});
    return map;
};

let str = "supercalifragilistichespiralidoso";
let ans = occorrenze(str);
console.log(`IN: ${str}\nOUT:`);
console.log(ans);