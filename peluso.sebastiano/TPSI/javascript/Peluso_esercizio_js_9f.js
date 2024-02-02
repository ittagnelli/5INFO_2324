

const fibonacci = (n) => {

    let f1 = 0;
    let f2 = 1;

    let f;

    for (let index = 2; index <= n; index++) {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        
        
    }

    return f;
    
}

const main = () => {
    console.log(fibonacci(8));
    console.log(fibonacci(10));
    console.log(fibonacci(15));
    console.log(fibonacci(16));
    console.log(fibonacci(17));
}


main();


