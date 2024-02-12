const gen_arr = (len) => {
    let list = Array(len).fill().map(e => e = Math.floor(Math.random() * 100)), l2 = [...list];
    return [list, l2.reverse()];
};

let n = 5, ans = gen_arr(n);
console.log(`IN: ${n}\nOUT: ${ans[0]}\treverse: ${ans[1]}`);