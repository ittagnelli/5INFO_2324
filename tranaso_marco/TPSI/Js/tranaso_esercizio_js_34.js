function random(N,M){
    let numeri_random=new Set();
    while(numeri_random.size<N)
    {
        let numero_random=Math.floor(Math.random()*M)+1;
        numeri_random.add(numero_random);
    }

    console.log(numeri_random);

}
let N=3;
let M=100;
random(N,M);