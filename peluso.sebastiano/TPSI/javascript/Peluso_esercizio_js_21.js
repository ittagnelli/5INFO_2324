



let N = 5;

function casuale(N) {

    let arrayCasuali = [];

    

    arrayCasuali = Array.from({length:100}, () => Math.floor(Math.random() * 50)+1);

    for (let index = 0; index < arrayCasuali.length; index++) {
        

        if (arrayCasuali[index]%N == 0) {

            arrayCasuali[index] = 0;

            

            
        }
        
        
    }


    
    //let arraydiMUltipli = arrayCasuali.map((value) => value%N == 0 ? 0 : value);
    

    return arrayCasuali;
}

console.log("array con numeri primi azzerati : ", casuale(N));