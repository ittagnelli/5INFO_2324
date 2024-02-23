function same_arr(arr1, arr2) {
    return arr1.every((value, index) => value === arr2[index]);
}

console.log(same_arr([1, 2, 3], [1, 2, 3]));
