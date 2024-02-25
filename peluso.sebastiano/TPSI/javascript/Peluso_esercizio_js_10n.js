
let str = "Facciamo tanti esercizi che ci fanno bene";
let str2 = "Javascript";

let N = 23;

function insert(str,str2,N) {

    let Newfrase = str.slice(0,N).concat(" ", str2, str.slice(N));


    return Newfrase;


    
}

console.log(insert(str,str2,N));