function is_anagramma(arr) {
    let final_ = new Map();
    arr.forEach(x => final_.set(x.split('').sort().join(''), x));
    return Array.from(final_.values());
}

console.log(is_anagramma(['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione']));
