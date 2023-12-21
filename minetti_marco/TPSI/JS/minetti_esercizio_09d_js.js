function cipolle(n) {
    let somma = 0;
    while(n != 0) {
        somma += n
        n--;
    }
    return(somma);
}

somma = cipolle(5);
console.log(somma);