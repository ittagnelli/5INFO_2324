

let array = ['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione'];

function anagrammi(array) {

    let mapnomiEsclusi = new Map();

    for (const value_letteraNormale of array) {

        let key_nomeOrdinato = value_letteraNormale.toLowerCase().split("").sort().join("");

        mapnomiEsclusi.set(key_nomeOrdinato,value_letteraNormale);

    }

    let mapvalues = [];
    
    mapvalues = mapnomiEsclusi.values();

    return mapvalues;
}

console.log("OUT", anagrammi(array));