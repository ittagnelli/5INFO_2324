function ex(input) {
    let a = input.splice(1);
    input = input.flat();
    return input.splice(-a);
}

let arr = [[1, 2, 3, 4, 5], 3];

console.log(ex(arr));