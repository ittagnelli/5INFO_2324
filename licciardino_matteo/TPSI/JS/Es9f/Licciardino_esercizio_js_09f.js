const fibonacci = (n) => {
    if (n<=1){
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

const main = () => {
    let ris_1 = fibonacci(3);
    console.log(`Il numero di fibonacci è: ${ris_1}`);

    let ris_2 = fibonacci(2);
    console.log(`Il numero di fibonacci è: ${ris_2}`);

    let ris_3 = fibonacci(4);
    console.log(`Il numero di fibonacci è: ${ris_3}`);

    let ris_4 = fibonacci(10);
    console.log(`Il numero di fibonacci è: ${ris_4}`);

    let ris_5 = fibonacci(8);
    console.log(`Il numero di fibonacci è: ${ris_5}`);
}

main();