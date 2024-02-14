function calc(stringa) {
    stringa = stringa.split("");
    stringa.reverse();
    let result = stringa.reduce((acc, currentValue, i) => {
        if (currentValue == '1')
            return acc + Math.pow(2, i);
        return acc;
    }, 0);
    return result;
}

let stringa = "010110";
console.log(calc(stringa));
