function exercise(input) {
    a = input.splice(1);
    input = input.flat();
    return input.filter((item) => item != a);
}


let input = [[1, 2, 3, 4], 3];

console.log(exercise(input));