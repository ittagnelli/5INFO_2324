function somma(n1, n2)
{
    console.log(n1+n2)
}

function prodotto(n1, n2)
{
    console.log(n1*n2)
}

function elevamento(n1, n2)
{
    console.log(n1**n2)
}

function input(n1, n2, callback){

    callback( n1, n2)

}

input(2, 6, somma);
input(5, 5, prodotto)
input(14, 2, elevamento);
