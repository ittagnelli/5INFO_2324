function calcola(a, b, c){
    a>b&a>c?(console.log(a)):'';
    b>a&b>c?(console.log(b)):'';
    c>a&c>b?(console.log(c)):'';
    a==b&a==c?(console.log('Uguali')):'';
}

calcola(8,3, 5);
calcola(6,9, 7);
calcola(12,2, 4);