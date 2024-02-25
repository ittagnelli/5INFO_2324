let l1 = [1, 2, 3], l2 = [1, 3, 3];

console.log(l1.reduce((acc, e, i) => { return acc = acc && e === l2[i] }, true));