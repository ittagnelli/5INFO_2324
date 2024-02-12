function tronca(str,N) {
    
    if (str.length <= N) {
        return str;
    } else {
        console.log(`${str.slice(0, N)}...`);
    }

}


tronca("facciamo tanti esercizi che ci fanno bene", 10);
