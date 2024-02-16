function swap(arr, n, m) {
   let num1 = arr[n]; 
    let num2 = arr[m]; 
    arr[n] = num2; 
    arr[m] = num1;
    return arr;
}

console.log(swap([10, 20, 30, 40, 50], 0, 2));
