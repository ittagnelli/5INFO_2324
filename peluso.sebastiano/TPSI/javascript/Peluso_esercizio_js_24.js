
let array = [];

let caratteri = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',0,1,2,3,4,5,6,7,8,9];

let DIM = 7;

function casual(array, caratteri, DIM) {

    let lunghezzaCaratteri = caratteri.length;

    for (let index = 0; index < DIM; index++) {
        
        let element = Math.floor(Math.random() * lunghezzaCaratteri);

        array.push(caratteri[element]);
        
    }

    return array.join();


    
}

console.log(`OUT [ ${casual(array,caratteri,DIM)} ]`);