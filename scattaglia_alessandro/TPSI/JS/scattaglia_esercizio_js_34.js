function numeriCasualiDecrescenti(N, M) {

    var numeriCasuali = Array.from({ length: N }, () => Math.floor(Math.random() * M) + 1);

    numeriCasuali.sort((a, b) => b - a);

    return numeriCasuali;
}

console.log(numeriCasualiDecrescenti(5, 100));
