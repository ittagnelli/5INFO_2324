
let array1 = [1,2,3];

function invertire(array1) {

    let array2 = [];

    array1.map((element) => array2.unshift(element));

    return array2;
    
}

console.log("IN ", array1);

console.log("OUT ", invertire(array1));


