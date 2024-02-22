
let array = [1,2,3];



function reverse(array) {

    let array2 = [];

    

    for (let i = array.length-1; i >= 0; i--) {
        const element = array[i] + ' ';

        array2 = array2 + element;
        
        
        
    }

    

    return array2;
    
}

console.log("IN ", array);
console.log("OUT ", reverse(array));