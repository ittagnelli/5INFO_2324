function reverse(array) {
    let array1 = '';
    for (let i = array.length - 1; i >= 0; i--) {
        array1 += array[i] + ' ';
    }
    console.log(array1.trim());
}
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reverse(array); 
