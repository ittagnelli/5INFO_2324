function concatenateN(stringa, n) {
    stringa = stringa.repeat(n);
    return stringa;
}

let stringa = "!Ciao!";
let n = 4;
console.log(concatenateN(stringa, n));