

let N = 3;
let C = 'a';

let array = [];

function arrayComposto(N,C) {

    for (let index = 0; index < N; index++) {

        array.push(C);
        
    }

    return array;
    
}

console.log(arrayComposto(N,C));