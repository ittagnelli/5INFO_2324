const rm_string = (s, r) => {
    return s.replace(r, '');
};

let string = 'The quick brown fox jumps over the lazy dog', rm = 'the';
console.log(rm_string(string, rm));