function upper_case(str) {
    return str.split('').map(word => word.toUpperCase()).join('');
}

console.log(upper_case("ciao mondo!!!"));
