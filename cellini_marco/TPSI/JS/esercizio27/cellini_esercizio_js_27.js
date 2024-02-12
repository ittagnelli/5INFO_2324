const no_copies = (l) => {
    for (let i = 0; i < l.length; i++)
        l.slice(i + 1).includes(l[i]) ? l.splice(i--, 1) : null;
    return l;
};

let arr = [1, 2, 3, 1, 2, 4];
console.log(`IN: ${arr}\nOUT: ${no_copies(arr)}`);