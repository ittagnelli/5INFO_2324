const concatenateN = (s) => {
    return s.split(',')[0].repeat(s.split(',')[1]);
};

let string = 'ciro!,5';
console.log(concatenateN(string));