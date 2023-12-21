totale = function (x) {
    let somma = 0;
    for(let i = 0; i <= x; i++){
        somma = somma + i;
    }
    return(somma);
}

 r1 = totale(5);
 r2 = totale(8);
 r3 = totale(2);

 console.log(r1);
 console.log(r2);
 console.log(r3);