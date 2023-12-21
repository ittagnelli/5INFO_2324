const sum = (n) => {
    let num = Number(n);                // opppure n+
    return (num * (num + 1)) / 2;
}

function main() {
    console.log(`La somma dei numeri sono fino 31 --> ${sum("31")}`);
    console.log(`La somma dei numeri sono fino 99 --> ${sum(99)}`);
    console.log(`La somma dei numeri sono fino 10 --> ${sum("10")}`);
}

main();