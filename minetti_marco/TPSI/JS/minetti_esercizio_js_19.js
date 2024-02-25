function ex(input) {
    let a = input.splice(1);
    input = input.flat();
    input.splice(a);
    return input;
}

let arr = [[1, 2, 3, 4, 5], 4];

console.log(ex(arr));