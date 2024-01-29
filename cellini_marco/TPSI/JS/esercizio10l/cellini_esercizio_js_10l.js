const special_concat = (s1, s2) => {
    return s1.split(' ').length * s2.split(' ').length != 1 ?
        'parole non adatte' :
        `${s2.substring(0, 2)}${s1.substring(2,)}${s1.substring(0, 2)}${s2.substring(2,)}`
};

let str1 = 'ciro', str2 = 'esposito';
console.log(special_concat(str1, str2));