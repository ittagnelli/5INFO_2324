function result(input) {
    let a = input.splice(1);
    input = input.flat();
    let b = input.at(a[0]);
    a[0] == 0 ? input.shift() : input.splice(a[0], a[0]);
    input.splice(a[1], 0, b)
    return input;
}


let input = [[10, 20, 30, 40, 50], 0, 2]; //output [20, 30, 10, 40, 50]

console.log(result(input));