function anagram(car1, car2) {
    let cambio = new Set();
    if (car1 - car2 != 0) {
        cambio.add(car1);
        return Array.from(cambio);
    }
}
let vett = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];
console.log(vett.sort(anagram(c1, c2)));
//    controllo.forEach(item => { vettore.forEach(e) => item == e {return controllo.delete(e)}});
//    let controllo = new Set(vettore);
//    return controllo;