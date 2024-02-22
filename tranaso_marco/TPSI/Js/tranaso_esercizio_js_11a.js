function inverse(array){
    return array.map((index, array) => array[array.length - 1 - index])
}

let array = [1,2,3,4,5];    
var inverso=inverse(array)

console.log(inverso)