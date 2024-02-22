function fun(n, c) {
    return Array(n).fill(c);
}

let str = ['c', 3];

typeof str[0] == "number" ? console.log(fun(str[0], str[1])) : console.log(fun(str[1], str[0]));