let n_casuali=function(N, M)
{
    let numeri= new Set();

    while(numeri.size<N)
    {
        numeri.add(Math.floor(Math.random()*M)+1);
    }

    let n_oridinati= Array.from(numeri).sort((a, b) => b-a);

    return n_oridinati;


}

console.log(n_casuali(3, 100));