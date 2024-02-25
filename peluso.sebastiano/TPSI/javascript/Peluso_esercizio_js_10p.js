
let str = "Facciamo tanti esercizi che ci fanno bene";


let N = 3;

function insert(str,N) {

    

    let fraseTroncata = str.split(" ").slice(0,N);



    return fraseTroncata.join(" ");
    
    


    


    
}

console.log("IN ", str);

console.log("OUT ",insert(str,N));

