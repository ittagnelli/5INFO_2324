function deletion(nums, M) {
    let new_vet = nums.filter((numero) => numero !== M);
    return new_vet;
}

let numeri = [1, 3, 5, 7, 9, 11];
let N = 7;
console.log(deletion(numeri, N));