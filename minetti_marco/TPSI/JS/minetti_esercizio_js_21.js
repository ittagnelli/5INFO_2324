let arr = Array(50).fill(0);

arr = arr.map((item) => item = Math.floor(Math.random() * 30));

let n = 5;

console.log(arr.map((item) => item % n == 0 ? item = 0 : item = item));