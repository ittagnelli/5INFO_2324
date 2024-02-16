function anagramma(array) {
    let array1 = array.map(parola => parola.split('').sort().join('')); 
    return array.filter((parola, i) => array1.indexOf(array1[i]) !== i);
}

let input = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];

console.log(anagramma(input));
