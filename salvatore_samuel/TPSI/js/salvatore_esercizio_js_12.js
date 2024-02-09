let numer1 = [1, 2, 3];
let numer2 = [1, 2, 30];
console.log(numer1.reduce((acc, e, current) => {return acc = acc && e === numer2[current]}, true));