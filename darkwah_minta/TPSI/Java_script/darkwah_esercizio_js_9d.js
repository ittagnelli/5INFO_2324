let som = 0;

function somma(n)
{
    
    for (let i = n; i > 0; i--)
    {
        som = som + i;
    }
    return som;
}


console.log(somma(3));
console.log(somma(5));
console.log(somma(8));