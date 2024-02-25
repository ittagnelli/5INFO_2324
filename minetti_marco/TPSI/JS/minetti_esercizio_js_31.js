let string = [1, 2, 3, 4, 4, 2, 2];
let str_unique = new Set();
string.map((item) => str_unique.add(item));
console.log(str_unique);