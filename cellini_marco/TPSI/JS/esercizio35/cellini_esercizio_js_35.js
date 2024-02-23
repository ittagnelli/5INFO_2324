const unique_char = (s) => {
    return Array.from(new Set(s.split(''))).join('');
};

let str = "supercalifragilistichespiralidoso";
console.log(`IN: ${str}\nOUT: ${unique_char(str)}`);