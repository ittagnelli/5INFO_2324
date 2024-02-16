const sub_arr = (l, n) => {
    l.reverse().splice(n, l.length - n);
    return l.reverse();
};

let nubers = [1, 2, 3, 4, 5];
console.log(`IN: ${nubers}\nOUT: ${sub_arr(nubers, 3)}`);