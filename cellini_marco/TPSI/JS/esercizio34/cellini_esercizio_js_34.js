const gen_arr = (n, m) => {
    return Array(n).fill(0).map(e => e = Math.floor(Math.random() * (m - n) + n)).sort((a, b) => b - a);
};

console.log(`IN: 3, 100\nOUT: ${gen_arr(3, 100)}`);