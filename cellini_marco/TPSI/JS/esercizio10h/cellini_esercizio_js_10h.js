const tronca = (ph) => {
    let str = ph.split(',')[0], n = ph.split(',')[1];
    return `${str.substring(0, n)}...`;
};

let string = 'Ciao Mondo la terra gira!!!, 10';
console.log(`${string}\n${tronca(string)}`);