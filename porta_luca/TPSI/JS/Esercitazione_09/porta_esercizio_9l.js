function somma(a, b){console.log(a+b);}

function prodotto(a, b){console.log(a*b);}

function potenza(a, b){console.log(a**b);}

function calcola(a, b, op){
    switch(op){
        case '+':
            somma(a, b);
            break;
        case '*':
            prodotto(a, b);
            break;
        case '^':
            potenza(a, b);
            break;
        default:
            break;
    }
}

calcola(5, 6, '+');
calcola(10, 4, '*');
calcola(2, 7, '^');