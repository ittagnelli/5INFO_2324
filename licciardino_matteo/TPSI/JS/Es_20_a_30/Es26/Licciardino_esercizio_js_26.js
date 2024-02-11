let N = 5;

function generateArray(n){
    let numRand = [];

    for(let i=0; i < n; i++){
        numRand.push(Math.floor(Math.random() * 100));
    }

    console.log(numRand);

    let randInvert = numRand.slice().reverse();
    console.log(randInvert);
}

generateArray(N);