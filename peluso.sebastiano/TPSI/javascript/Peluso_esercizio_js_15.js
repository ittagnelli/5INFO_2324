
let array = [1,2,3,4];
let N = 3;

function rimozione(N, array) {

    if (array.includes(N)) {

        let posizione_N = array.indexOf(N);

        array.splice(posizione_N,1);

        return array;
        
    }


    

    

    
}

console.log(rimozione(N,array));

