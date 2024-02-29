let numeri = [1, 2, 3, 4];

let quadrati = numeri.reduce((acc, current) => acc + current * current, 0);

console.log("La somma dei quadrati è:", quadrati);