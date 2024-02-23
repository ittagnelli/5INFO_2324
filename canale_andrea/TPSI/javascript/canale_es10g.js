function invert_case(str) {
      return str.split('').map(word => word.charCodeAt(0) >= 65 && word.charCodeAt(0) <=90 ? word.toLowerCase() : word.toUpperCase()).join('');
}

console.log(invert_case("Ciao Mondo!!!"));
