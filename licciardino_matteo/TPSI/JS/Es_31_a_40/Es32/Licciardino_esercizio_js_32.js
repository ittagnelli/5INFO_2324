let vet = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];

function anagramma(vet){
    let mappa = new Map();

    for(let words of vet){
        let ord = words.split('').sort().join('');

        mappa.set(ord, words);
    }

    return Array.from(mappa.values());
}

let vet2 = anagramma(vet);
console.log(vet2);